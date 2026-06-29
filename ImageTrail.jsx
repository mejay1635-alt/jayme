import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './ImageTrail.css';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(event, rect) {
  const point = event.touches?.[0] || event;
  return {
    x: point.clientX - rect.left,
    y: point.clientY - rect.top,
  };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(element) {
    this.DOM.el = element;
    this.DOM.inner = element.querySelector('.image-trail__img-inner');
    this.getRect();
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }

  destroy() {
    window.removeEventListener('resize', this.resize);
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.image-trail__img')].map((img) => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.frameId = null;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(event, rect);
    };

    this.initRender = (event) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(event, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.frameId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender);
      container.removeEventListener('touchmove', this.initRender);
    };

    container.addEventListener('mousemove', this.handlePointerMove);
    container.addEventListener('touchmove', this.handlePointerMove);
    container.addEventListener('mousemove', this.initRender);
    container.addEventListener('touchmove', this.initRender);
  }

  destroy() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    this.container.removeEventListener('mousemove', this.handlePointerMove);
    this.container.removeEventListener('touchmove', this.handlePointerMove);
    this.container.removeEventListener('mousemove', this.initRender);
    this.container.removeEventListener('touchmove', this.initRender);
    this.images.forEach((img) => img.destroy());
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    this.frameId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    if (!this.imagesTotal) return;

    this.zIndexVal += 1;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
        },
        0,
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2.8,
          filter: 'brightness(250%)',
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          filter: 'brightness(100%)',
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power2',
          opacity: 0,
          scale: 0.2,
        },
        0.45,
      );
  }

  onImageActivated() {
    this.activeImagesCount += 1;
    this.isIdle = false;
  }

  onImageDeactivated() {
    this.activeImagesCount -= 1;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

export default function ImageTrail({ items = [] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return undefined;

    const trail = new ImageTrailVariant(containerRef.current);
    return () => trail.destroy();
  }, [items]);

  return (
    <div className="image-trail" ref={containerRef}>
      {items.map((url) => (
        <div className="image-trail__img" key={url}>
          <div className="image-trail__img-inner" style={{ backgroundImage: `url(${url})` }} />
        </div>
      ))}
    </div>
  );
}
