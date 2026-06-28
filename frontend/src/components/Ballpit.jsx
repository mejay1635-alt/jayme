import { useEffect, useRef } from 'react';
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Clock,
  Color,
  InstancedMesh,
  MathUtils,
  MeshPhysicalMaterial,
  Object3D,
  PerspectiveCamera,
  Plane,
  PMREMGenerator,
  PointLight,
  Raycaster,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const { randFloat, randFloatSpread } = MathUtils;

const DEFAULT_CONFIG = {
  count: 42,
  colors: ['#ff8fab', '#ffd166', '#06d6a0', '#1a73e8'],
  ambientColor: 0xffffff,
  ambientIntensity: 1,
  lightIntensity: 120,
  materialParams: {
    metalness: 0.12,
    roughness: 0.22,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  },
  minSize: 0.24,
  maxSize: 0.52,
  size0: 0.66,
  gravity: 0,
  friction: 0.995,
  wallBounce: 0.92,
  maxVelocity: 0.055,
  maxX: 5,
  maxY: 1.6,
  maxZ: 1.6,
  controlSphere0: false,
  followCursor: true,
};

const TMP_OBJECT = new Object3D();
const POINTER = new Vector2();
const PLANE = new Plane(new Vector3(0, 0, 1), 0);
const RAYCASTER = new Raycaster();
const INTERSECTION = new Vector3();
const V0 = new Vector3();
const V1 = new Vector3();
const V2 = new Vector3();
const V3 = new Vector3();
const V4 = new Vector3();
const V5 = new Vector3();

class PhysicsController {
  constructor(config) {
    this.config = config;
    this.positionData = new Float32Array(config.count * 3).fill(0);
    this.velocityData = new Float32Array(config.count * 3).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.center = new Vector3();
    this.initializePositions();
    this.initializeSizes();
  }

  initializePositions() {
    const { config, positionData } = this;
    this.center.toArray(positionData, 0);
    for (let index = 1; index < config.count; index += 1) {
      const base = index * 3;
      positionData[base] = randFloatSpread(config.maxX * 2);
      positionData[base + 1] = randFloatSpread(config.maxY * 2);
      positionData[base + 2] = randFloatSpread(config.maxZ * 2);
    }
  }

  initializeSizes() {
    const { config, sizeData } = this;
    sizeData[0] = config.size0;
    for (let index = 1; index < config.count; index += 1) {
      sizeData[index] = randFloat(config.minSize, config.maxSize);
    }
  }

  update(frame) {
    const { config, positionData, velocityData, sizeData } = this;
    const startIndex = config.controlSphere0 ? 1 : 0;

    if (config.controlSphere0) {
      V0.fromArray(positionData, 0);
      V0.lerp(this.center, 0.1).toArray(positionData, 0);
      V1.set(0, 0, 0).toArray(velocityData, 0);
    }

    for (let index = startIndex; index < config.count; index += 1) {
      const base = index * 3;
      V0.fromArray(positionData, base);
      V1.fromArray(velocityData, base);

      V1.y -= frame.delta * config.gravity * sizeData[index];
      V1.multiplyScalar(config.friction);
      V1.clampLength(0, config.maxVelocity);
      V0.add(V1);

      V0.toArray(positionData, base);
      V1.toArray(velocityData, base);
    }

    for (let index = startIndex; index < config.count; index += 1) {
      const base = index * 3;
      V0.fromArray(positionData, base);
      V1.fromArray(velocityData, base);
      const radius = sizeData[index];

      for (let other = index + 1; other < config.count; other += 1) {
        const otherBase = other * 3;
        V2.fromArray(positionData, otherBase);
        V3.fromArray(velocityData, otherBase);
        const otherRadius = sizeData[other];

        V4.copy(V2).sub(V0);
        const distance = V4.length();
        const minDistance = radius + otherRadius;

        if (distance < minDistance && distance > 0) {
          const overlap = minDistance - distance;
          V5.copy(V4).normalize().multiplyScalar(overlap * 0.5);

          V0.sub(V5);
          V2.add(V5);
          V1.addScaledVector(V5, -0.2);
          V3.addScaledVector(V5, 0.2);

          V0.toArray(positionData, base);
          V2.toArray(positionData, otherBase);
          V1.toArray(velocityData, base);
          V3.toArray(velocityData, otherBase);
        }
      }

      if (config.controlSphere0) {
        V4.fromArray(positionData, 0).sub(V0);
        const distanceToPointer = V4.length();
        const pointerRadius = sizeData[0] + radius;
        if (distanceToPointer < pointerRadius && distanceToPointer > 0) {
          const diff = pointerRadius - distanceToPointer;
          V5.copy(V4).normalize().multiplyScalar(diff);
          V0.sub(V5);
          V1.addScaledVector(V5, -0.2);
        }
      }

      if (Math.abs(V0.x) + radius > config.maxX) {
        V0.x = Math.sign(V0.x) * (config.maxX - radius);
        V1.x = -V1.x * config.wallBounce;
      }
      if (Math.abs(V0.y) + radius > config.maxY) {
        V0.y = Math.sign(V0.y) * (config.maxY - radius);
        V1.y = -V1.y * config.wallBounce;
      }
      if (Math.abs(V0.z) + radius > config.maxZ) {
        V0.z = Math.sign(V0.z) * (config.maxZ - radius);
        V1.z = -V1.z * config.wallBounce;
      }

      V0.toArray(positionData, base);
      V1.toArray(velocityData, base);
    }
  }
}

class BallpitMesh extends InstancedMesh {
  constructor(renderer, config) {
    const environment = new RoomEnvironment();
    const envMap = new PMREMGenerator(renderer).fromScene(environment, 0.04).texture;
    const geometry = new SphereGeometry(1, 32, 32);
    const material = new MeshPhysicalMaterial({
      envMap,
      ...config.materialParams,
    });

    super(geometry, material, config.count);
    this.config = config;
    this.physics = new PhysicsController(config);
    this.ambientLight = new AmbientLight(config.ambientColor, config.ambientIntensity);
    this.pointLight = new PointLight(new Color(config.colors[0]), config.lightIntensity);
    this.add(this.ambientLight);
    this.add(this.pointLight);
    this.applyColors(config.colors);
  }

  applyColors(colors) {
    const palette = colors.map((value) => new Color(value));
    const target = new Color();
    for (let index = 0; index < this.count; index += 1) {
      const scaled = (index / Math.max(1, this.count - 1)) * (palette.length - 1);
      const baseIndex = Math.floor(scaled);
      const mix = scaled - baseIndex;
      const start = palette[baseIndex];
      const end = palette[Math.min(baseIndex + 1, palette.length - 1)];

      target.copy(start).lerp(end, mix);
      this.setColorAt(index, target);
      if (index === 0) {
        this.pointLight.color.copy(target);
      }
    }
    this.instanceColor.needsUpdate = true;
  }

  update(frame) {
    this.physics.update(frame);
    for (let index = 0; index < this.count; index += 1) {
      TMP_OBJECT.position.fromArray(this.physics.positionData, index * 3);
      TMP_OBJECT.scale.setScalar(index === 0 && !this.config.followCursor ? 0 : this.physics.sizeData[index]);
      TMP_OBJECT.updateMatrix();
      this.setMatrixAt(index, TMP_OBJECT.matrix);
      if (index === 0) {
        this.pointLight.position.copy(TMP_OBJECT.position);
      }
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

export default function Ballpit({ className = '', followCursor = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = ACESFilmicToneMapping;

    const scene = new Scene();
    const camera = new PerspectiveCamera(26, 1, 0.1, 100);
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);

    const container = canvas.parentElement;
    const config = { ...DEFAULT_CONFIG, followCursor };
    const ballpit = new BallpitMesh(renderer, config);
    scene.add(ballpit);

    const clock = new Clock();

    const resize = () => {
      const width = container?.clientWidth || window.innerWidth;
      const height = container?.clientHeight || 120;
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      const fov = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(fov / 2) * camera.position.length();
      const visibleWidth = visibleHeight * camera.aspect;
      ballpit.config.maxX = visibleWidth * 0.46;
      ballpit.config.maxY = visibleHeight * 0.28;
      ballpit.config.maxZ = 1.6;
    };

    const handlePointer = (event) => {
      if (!followCursor) return;
      const rect = canvas.getBoundingClientRect();
      const point = event.touches?.[0] || event;
      POINTER.x = ((point.clientX - rect.left) / rect.width) * 2 - 1;
      POINTER.y = -((point.clientY - rect.top) / rect.height) * 2 + 1;
      RAYCASTER.setFromCamera(POINTER, camera);
      camera.getWorldDirection(PLANE.normal);
      RAYCASTER.ray.intersectPlane(PLANE, INTERSECTION);
      ballpit.physics.center.copy(INTERSECTION);
      ballpit.config.controlSphere0 = true;
    };

    const handleLeave = () => {
      ballpit.config.controlSphere0 = false;
    };

    const animate = () => {
      const delta = clock.getDelta();
      ballpit.update({ delta });
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    let frame = 0;
    resize();
    frame = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', handlePointer);
    canvas.addEventListener('pointerleave', handleLeave);
    canvas.addEventListener('touchmove', handlePointer, { passive: true });
    canvas.addEventListener('touchend', handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointer);
      canvas.removeEventListener('pointerleave', handleLeave);
      canvas.removeEventListener('touchmove', handlePointer);
      canvas.removeEventListener('touchend', handleLeave);
      ballpit.geometry.dispose();
      ballpit.material.dispose();
      renderer.dispose();
    };
  }, [followCursor]);

  return <canvas className={className} ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
}
