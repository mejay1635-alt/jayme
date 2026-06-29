import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ballpit from './components/Ballpit.jsx';
import ImageTrail from './components/ImageTrail.jsx';
import './styles.css';

const navItems = ['首页', '成员', '照片', '树洞', '联系'];
const memberColors = ['mint', 'sky', 'sun', 'rose', 'lavender', 'leaf'];

const fallbackTrailImages = [
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23ffe6a7"/%3E%3Ccircle cx="220" cy="180" r="110" fill="%23ff8fab"/%3E%3Ccircle cx="420" cy="270" r="130" fill="%237bdff2"/%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23d8f3dc"/%3E%3Cpath d="M120 330 300 130l220 200Z" fill="%2351b788"/%3E%3Ccircle cx="460" cy="120" r="70" fill="%23ffd166"/%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23dcd6ff"/%3E%3Crect x="130" y="130" width="380" height="220" rx="32" fill="%231a73e8"/%3E%3Ccircle cx="250" cy="240" r="62" fill="%23fff"/%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23fff0ba"/%3E%3Cpath d="M90 260c90-160 190-160 280 0s150 120 190 20" stroke="%23ff6b6b" stroke-width="46" fill="none" stroke-linecap="round"/%3E%3C/svg%3E',
];

function ClassIllustration() {
  return (
    <svg className="class-scene" viewBox="0 0 520 360" role="img" aria-label="快乐班级插画">
      <defs>
        <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#9ddcff" />
          <stop offset="100%" stopColor="#f9e798" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" rx="28" fill="url(#sky)" />
      <path className="cloud cloud-one" d="M94 78c8-18 34-21 47-6 15-12 43-4 46 17 18 2 29 16 27 31H54c-7-22 15-43 40-42Z" fill="#fff" />
      <path className="cloud cloud-two" d="M380 72c7-17 31-20 43-5 13-11 38-3 41 16 16 2 26 15 24 29H344c-6-20 14-39 36-40Z" fill="#fff" />
      <path d="M80 278h360v48H80z" fill="#51b788" />
      <path d="M126 182h268v112H126z" fill="#fff3c4" />
      <path d="M108 184 260 82l152 102H108Z" fill="#ff8fab" />
      <path d="M236 230h48v64h-48z" fill="#7b61ff" />
      <path d="M154 210h44v38h-44zM322 210h44v38h-44z" fill="#7bdff2" />
      <path className="bell" d="M250 142h20l12 28h-44l12-28Z" fill="#ffd166" />
      <circle className="balloon balloon-one" cx="112" cy="126" r="21" fill="#1a73e8" />
      <path d="M112 147c-5 34 10 45 0 71" stroke="#33424f" strokeWidth="3" fill="none" />
      <circle className="balloon balloon-two" cx="420" cy="132" r="24" fill="#06d6a0" />
      <path d="M420 156c-9 36 13 43 0 72" stroke="#33424f" strokeWidth="3" fill="none" />
      <circle cx="175" cy="293" r="20" fill="#ffd166" />
      <circle cx="345" cy="293" r="20" fill="#ffd166" />
      <path d="M166 290c8 10 18 10 27 0M336 290c8 10 18 10 27 0" stroke="#6b4f2a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path className="spark spark-one" d="M74 216h20M84 206v20" stroke="#ff6b6b" strokeWidth="5" strokeLinecap="round" />
      <path className="spark spark-two" d="M436 226h22M447 215v22" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function HomePage({ onJump }) {
  return (
    <section className="page home-grid" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="kicker">阳光三班中文官网</p>
        <h1 id="home-title">把每天的好奇心，种成闪闪发亮的小森林</h1>
        <p className="lead">
          这里收藏班级故事、同学风采、活动照片和悄悄话。成员、照片和树洞内容都可以由后台或接口维护。
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => onJump('照片')}>看照片墙</button>
          <button type="button" className="ghost" onClick={() => onJump('成员')}>看成员</button>
        </div>
      </div>
      <ClassIllustration />
    </section>
  );
}

function MembersPage() {
  const [members, setMembers] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;

    async function loadMembers() {
      try {
        setStatus('loading');
        const response = await fetch('/api/members/');
        if (!response.ok) throw new Error('成员数据读取失败');
        const data = await response.json();
        if (!ignore) {
          setMembers(data.results || []);
          setStatus('ready');
        }
      } catch (error) {
        if (!ignore) setStatus('error');
      }
    }

    loadMembers();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="page" aria-labelledby="members-title">
      <div className="section-heading">
        <p className="kicker">成员</p>
        <h2 id="members-title">这里展示 SQLite 数据表里的真实成员</h2>
        <p className="section-note">请在数据库或 Django 后台维护成员资料，前台页面只读展示。</p>
      </div>

      {status === 'loading' && <p className="loading-card">正在读取成员数据...</p>}
      {status === 'error' && <p className="error-card">暂时无法读取成员数据，请检查 Django 服务或 API。</p>}
      {status === 'ready' && members.length === 0 && (
        <p className="empty-card">数据库里还没有成员。向 `members` 表添加数据后，这里会自动显示。</p>
      )}

      {status === 'ready' && members.length > 0 && (
        <div className="member-grid">
          {members.map((member, index) => {
            const name = member['联系人'] || member.contact || '未命名';
            const gender = member['性别'] || member.gender || '未填写';
            const hobbies = member['兴趣爱好'] || member.hobbies || '未填写';
            const color = memberColors[index % memberColors.length];

            return (
              <article className={`member-card ${color}`} key={member.id || name} style={{ '--delay': `${index * 90}ms` }}>
                <span className="avatar" aria-hidden="true">{name.slice(0, 1)}</span>
                <h3>{name}</h3>
                <dl className="member-meta">
                  <div>
                    <dt>性别</dt>
                    <dd>{gender}</dd>
                  </div>
                  <div>
                    <dt>兴趣爱好</dt>
                    <dd>{hobbies}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;

    async function loadPhotos() {
      try {
        setStatus('loading');
        const response = await fetch('/api/photos/');
        if (!response.ok) throw new Error('照片数据读取失败');
        const data = await response.json();
        if (!ignore) {
          setPhotos(data.results || []);
          setStatus('ready');
        }
      } catch (error) {
        if (!ignore) setStatus('error');
      }
    }

    loadPhotos();
    return () => {
      ignore = true;
    };
  }, []);

  const trailImages = photos
    .map((photo) => photo['图片地址'] || photo.image_url)
    .filter(Boolean);
  const previewItems = trailImages.length > 0 ? trailImages : fallbackTrailImages;

  return (
    <section className="page" aria-labelledby="photos-title">
      <div className="section-heading">
        <p className="kicker">照片</p>
        <h2 id="photos-title">后台上传，前台用照片轨迹展览</h2>
        <p className="section-note">只有管理员能在后台挂照片，前台页面用 React Bits 照片轨迹展示已经公开的照片。</p>
      </div>

      {status === 'loading' && <p className="loading-card">正在读取照片墙...</p>}
      {status === 'error' && <p className="error-card">暂时无法读取照片，请检查 Django 服务或照片 API。</p>}
      {status === 'ready' && photos.length === 0 && (
        <p className="empty-card">后台还没有公开照片。上传照片并勾选“前台展示”后，这里会出现照片墙。</p>
      )}

      {status === 'ready' && photos.length > 0 && <ImageTrail items={previewItems} />}
    </section>
  );
}

function TreeHolePage() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('loading');
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  async function loadMessages() {
    try {
      setStatus('loading');
      const response = await fetch('/api/tree-hole/');
      if (!response.ok) throw new Error('树洞数据读取失败');
      const data = await response.json();
      setMessages(data.results || []);
      setStatus('ready');
    } catch (error) {
      setStatus('error');
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmedContent = content.trim();

    if (!trimmedContent) {
      setFeedback('先写一句悄悄话吧。');
      return;
    }

    try {
      setSubmitStatus('submitting');
      setFeedback('');
      const response = await fetch('/api/tree-hole/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          昵称: nickname.trim(),
          留言内容: trimmedContent,
        }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || '提交失败');

      setMessages((current) => [data, ...current]);
      setNickname('');
      setContent('');
      setSubmitStatus('done');
      setFeedback('已经放进树洞啦。');
    } catch (error) {
      setSubmitStatus('idle');
      setFeedback(error.message || '提交失败，请稍后再试。');
    }
  }

  return (
    <section className="page tree-hole" aria-labelledby="tree-title">
      <div className="section-heading">
        <p className="kicker">树洞</p>
        <h2 id="tree-title">前台可以投递，后台可以管理</h2>
        <p className="section-note">同学可以在这里提交留言；你可以在后台编辑、隐藏或删除树洞内容。</p>
      </div>
      <div className="tree-layout">
        <div className="tree-visual" aria-hidden="true">
          <div className="tree-top" />
          <div className="tree-trunk">
            <span />
          </div>
        </div>
        <div className="tree-panel">
          <form className="tree-form" onSubmit={handleSubmit}>
            <label>
              昵称
              <input
                maxLength="50"
                onChange={(event) => setNickname(event.target.value)}
                placeholder="可以留空匿名"
                type="text"
                value={nickname}
              />
            </label>
            <label>
              留言内容
              <textarea
                maxLength="300"
                onChange={(event) => setContent(event.target.value)}
                placeholder="写下想对班级说的话..."
                rows="4"
                value={content}
              />
            </label>
            <div className="form-row">
              <span>{content.length}/300</span>
              <button type="submit" disabled={submitStatus === 'submitting'}>
                {submitStatus === 'submitting' ? '投递中...' : '投进树洞'}
              </button>
            </div>
            {feedback && <p className="form-feedback">{feedback}</p>}
          </form>

          {status === 'loading' && <p className="loading-card">正在读取树洞留言...</p>}
          {status === 'error' && <p className="error-card">暂时无法读取树洞，请检查 Django 服务或 API。</p>}
          {status === 'ready' && messages.length === 0 && (
            <p className="empty-card">树洞里还没有留言。写下第一句话吧。</p>
          )}
          {status === 'ready' && messages.length > 0 && (
            <div className="wish-list">
              {messages.map((message, index) => {
                const author = message['昵称'] || message.nickname || '匿名同学';
                const text = message['留言内容'] || message.content || '';

                return (
                  <article className="tree-message" key={message.id || `${author}-${index}`} style={{ '--delay': `${index * 90}ms` }}>
                    <p>{text}</p>
                    <span>{author}</span>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="page contact-page" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="kicker">联系</p>
        <h2 id="contact-title">家校一起，把成长照亮</h2>
      </div>
      <div className="contact-grid">
        <article>
          <h3>班级信箱</h3>
          <p>zhw15759327416@qq.com</p>
        </article>
        <article>
          <h3>开放时间</h3>
          <p>周一至周五 16:30 - 17:30</p>
        </article>
        <article>
          <h3>班级地点</h3>
          <p>XX小学</p>
        </article>
      </div>
    </section>
  );
}

function App() {
  const [activePage, setActivePage] = useState('首页');

  const page = useMemo(() => {
    switch (activePage) {
      case '成员':
        return <MembersPage />;
      case '照片':
        return <PhotosPage />;
      case '树洞':
        return <TreeHolePage />;
      case '联系':
        return <ContactPage />;
      default:
        return <HomePage onJump={setActivePage} />;
    }
  }, [activePage]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-ballpit" aria-hidden="true">
          <Ballpit className="topbar-ballpit__canvas" />
        </div>
        <div className="topbar-content">
          <a className="brand" href="/" aria-label="阳光三班首页">
            <span aria-hidden="true">三</span>
            阳光三班
          </a>
          <nav aria-label="主导航">
            {navItems.map((item) => (
              <button
                className={activePage === item ? 'active' : ''}
                key={item}
                type="button"
                onClick={() => setActivePage(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="content" key={activePage}>
        {page}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
