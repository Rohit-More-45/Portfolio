import React, { useState, useMemo } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projectsData = [
    { id:1, category:'websites', title:'E-Commerce Platform', desc:'Full-featured online store with payment integration.', icon:'fa-store', tech:['React','Node.js','MongoDB'] },
    { id:2, category:'apps', title:'Task Manager Pro', desc:'Productivity app with real-time collaboration.', icon:'fa-tasks', tech:['Vue','Firebase','Tailwind'] },
    { id:3, category:'article', title:'The Future of Web Dev', desc:'Deep dive into modern frontend architecture.', icon:'fa-newspaper', tech:['Markdown','Next.js','MDX'] },
    { id:4, category:'weblog', title:'Dev Diary', desc:'Personal blog sharing coding insights & tips.', icon:'fa-blog', tech:['Ghost','Node.js','GraphQL'] },
    { id:5, category:'websites', title:'Portfolio Gallery', desc:'Showcase for creative professionals.', icon:'fa-images', tech:['React','Framer Motion','Sanity'] },
    { id:6, category:'apps', title:'Health Tracker', desc:'Fitness & wellness tracking mobile app.', icon:'fa-heartbeat', tech:['React Native','Firebase','Redux'] },
  ];
  const categories = ['all','websites','apps','article','weblog'];
  const filtered = useMemo(() => {
    if (filter === 'all') return projectsData;
    return projectsData.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <>
      <style>{`
        .projects-section { padding: 5rem 2rem; background: #0c0f15; font-family: 'Inter', sans-serif; color: #f0f4fa; border-top: 1px solid rgba(255,255,255,0.06); position: relative; overflow: hidden; }
        .bubbles { position: absolute; top:0; left:0; right:0; bottom:0; pointer-events: none; z-index:0; }
        .bubble { position: absolute; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(45,212,191,0.08), rgba(45,212,191,0.02)); border: 1px solid rgba(45,212,191,0.05); animation: float 20s infinite alternate ease-in-out; }
        .bubble:nth-child(1) { width:120px; height:120px; top:10%; left:5%; animation-duration:22s; animation-delay:-2s; }
        .bubble:nth-child(2) { width:200px; height:200px; bottom:20%; right:5%; animation-duration:26s; animation-delay:-5s; }
        .bubble:nth-child(3) { width:80px; height:80px; top:50%; left:50%; animation-duration:18s; animation-delay:-8s; }
        .bubble:nth-child(4) { width:160px; height:160px; top:20%; right:20%; animation-duration:24s; animation-delay:-3s; }
        .bubble:nth-child(5) { width:100px; height:100px; bottom:10%; left:30%; animation-duration:20s; animation-delay:-10s; }
        @keyframes float { 0% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(30px,-40px) scale(1.1) rotate(5deg); } 66% { transform: translate(-20px,20px) scale(0.9) rotate(-3deg); } 100% { transform: translate(10px,-30px) scale(1.05) rotate(2deg); } }
        .projects-container { max-width:1280px; margin:0 auto; position:relative; z-index:1; }
        .projects-header { text-align:center; margin-bottom:3.5rem; }
        .projects-header h2 { font-size:3rem; font-weight:800; letter-spacing:-0.02em; }
        .projects-header h2 .highlight { color:#2dd4bf; }
        .projects-header .sub { font-size:0.8rem; text-transform:uppercase; letter-spacing:0.2em; color:rgba(255,255,255,0.3); margin-top:0.5rem; font-weight:500; }
        .filter-buttons { display:flex; flex-wrap:wrap; justify-content:center; gap:0.8rem; margin-bottom:3rem; }
        .filter-btn { padding:0.5rem 1.6rem; border-radius:60px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.02); color:rgba(255,255,255,0.5); font-size:0.85rem; font-weight:600; cursor:pointer; transition:all 0.3s ease; font-family:inherit; backdrop-filter:blur(4px); }
        .filter-btn:hover { background:rgba(255,255,255,0.06); color:#f0f4fa; }
        .filter-btn.active { background:#2dd4bf; color:#0c0f15; border-color:#2dd4bf; box-shadow:0 4px 20px rgba(45,212,191,0.25); }
        .projects-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:2rem; }
        .project-card { background:rgba(255,255,255,0.04); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); border-radius:24px; overflow:hidden; transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); cursor:default; box-shadow:0 8px 32px rgba(0,0,0,0.2); }
        .project-card:hover { transform:translateY(-12px) scale(1.02); border-color:rgba(45,212,191,0.3); box-shadow:0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(45,212,191,0.05); }
        .window-header { padding:1rem 1.2rem; background:rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:space-between; }
        .window-controls { display:flex; gap:0.5rem; }
        .window-controls span { display:inline-block; width:12px; height:12px; border-radius:50%; }
        .window-controls .close { background:#ff5f57; }
        .window-controls .minimize { background:#ffbd2e; }
        .window-controls .expand { background:#28c840; }
        .window-title { font-size:0.8rem; font-weight:600; color:rgba(255,255,255,0.5); letter-spacing:0.02em; display:flex; align-items:center; gap:0.5rem; }
        .window-title i { color:#2dd4bf; }
        .project-content { padding:1.5rem 1.5rem 1.8rem; }
        .project-icon { font-size:2.4rem; color:rgba(45,212,191,0.6); margin-bottom:0.8rem; }
        .project-card h3 { font-size:1.3rem; font-weight:700; margin-bottom:0.4rem; color:#f0f4fa; }
        .project-card p { font-size:0.95rem; color:rgba(255,255,255,0.5); line-height:1.6; margin-bottom:1rem; }
        .project-tech { display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.8rem; }
        .project-tech span { font-size:0.7rem; font-weight:600; padding:0.2rem 0.9rem; border-radius:30px; background:rgba(45,212,191,0.08); border:1px solid rgba(45,212,191,0.12); color:rgba(255,255,255,0.6); letter-spacing:0.02em; }
        .project-category { display:inline-block; margin-top:1rem; font-size:0.7rem; text-transform:uppercase; letter-spacing:0.05em; color:rgba(255,255,255,0.2); border:1px solid rgba(255,255,255,0.06); padding:0.15rem 0.8rem; border-radius:30px; }
        @media (max-width:768px) { .projects-section { padding:3rem 1.2rem; } .projects-header h2 { font-size:2.2rem; } .projects-grid { grid-template-columns:1fr 1fr; gap:1.2rem; } .bubble { display:none; } }
        @media (max-width:480px) { .projects-grid { grid-template-columns:1fr; } .filter-btn { padding:0.4rem 1.2rem; font-size:0.8rem; } }
      `}</style>
      <section className="projects-section" id="portfolio">
        <div className="bubbles"><div className="bubble" /><div className="bubble" /><div className="bubble" /><div className="bubble" /><div className="bubble" /></div>
        <div className="projects-container">
          <div className="projects-header">
            <h2>My <span className="highlight">Projects</span></h2>
            <div className="sub">Selected Works</div>
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {filtered.map((item) => (
              <div key={item.id} className="project-card">
                <div className="window-header">
                  <div className="window-controls"><span className="close" /><span className="minimize" /><span className="expand" /></div>
                  <div className="window-title"><i className={`fas ${item.icon}`} />{item.title}</div>
                </div>
                <div className="project-content">
                  <div className="project-icon"><i className={`fas ${item.icon}`} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="project-tech">{item.tech.map((t,i) => <span key={i}>{t}</span>)}</div>
                  <span className="project-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
