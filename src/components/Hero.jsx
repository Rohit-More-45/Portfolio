import React from 'react';

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section { min-height: 100vh; display: flex; align-items: center; padding: 6rem 2rem 4rem; background: #0c0f15; font-family: 'Inter', sans-serif; color: #f0f4fa; }
        .hero-container { max-width: 1280px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-content { display: flex; flex-direction: column; gap: 1.8rem; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(45,212,191,0.12); border: 1px solid rgba(45,212,191,0.2); border-radius: 40px; padding: 0.4rem 1.2rem 0.4rem 1rem; font-size: 0.8rem; font-weight: 600; color: #2dd4bf; width: fit-content; }
        .hero-badge .pulse-dot { display: inline-block; width: 8px; height: 8px; background: #2dd4bf; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(1.4); } }
        .hero-title { font-size: 4.5rem; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; }
        .hero-title .light { color: rgba(255,255,255,0.3); font-weight: 300; }
        .hero-title .name { background: linear-gradient(135deg, #2dd4bf, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-tagline { font-size: 1.25rem; color: rgba(255,255,255,0.6); max-width: 480px; line-height: 1.6; }
        .hero-buttons { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem; }
        .btn-primary { background: #2dd4bf; color: #0c0f15; border: none; padding: 0.8rem 2.2rem; border-radius: 60px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(45,212,191,0.25); }
        .btn-primary:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(45,212,191,0.35); }
        .btn-secondary { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: #f0f4fa; padding: 0.8rem 2.2rem; border-radius: 60px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; }
        .btn-secondary:hover { border-color: #2dd4bf; color: #2dd4bf; background: rgba(45,212,191,0.05); }
        .hero-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.06); }
        .stat-item { display: flex; flex-direction: column; }
        .stat-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.3); font-weight: 600; }
        .stat-value { font-size: 1.1rem; font-weight: 600; color: #f0f4fa; margin-top: 0.15rem; }
        .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
        .hero-circle { width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(45,212,191,0.15), transparent 70%); border: 1px solid rgba(45,212,191,0.15); display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; backdrop-filter: blur(4px); }
        .hero-circle .big-icon { font-size: 5rem; color: rgba(45,212,191,0.4); margin-bottom: 0.5rem; }
        .hero-circle .label { font-size: 1.2rem; font-weight: 700; letter-spacing: 0.1em; color: #2dd4bf; background: rgba(45,212,191,0.08); padding: 0.4rem 1.6rem; border-radius: 40px; border: 1px solid rgba(45,212,191,0.15); }
        .hero-circle .sub-label { font-size: 0.8rem; color: rgba(255,255,255,0.3); margin-top: 0.5rem; }
        .dot-1, .dot-2 { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: rgba(45,212,191,0.2); }
        .dot-1 { top: 10%; right: 5%; animation: float 6s infinite alternate; }
        .dot-2 { bottom: 15%; left: 8%; width: 18px; height: 18px; animation: float 8s infinite alternate-reverse; }
        @keyframes float { 0% { transform: translateY(0px) scale(1); } 100% { transform: translateY(-20px) scale(1.1); } }
        @media (max-width: 1024px) { .hero-title { font-size: 3.6rem; } .hero-circle { width: 300px; height: 300px; } }
        @media (max-width: 768px) { .hero-container { grid-template-columns: 1fr; text-align: center; gap: 3rem; } .hero-content { align-items: center; } .hero-tagline { max-width: 100%; } .hero-buttons { justify-content: center; } .hero-stats { grid-template-columns: repeat(2,1fr); gap: 1.2rem; width: 100%; } .hero-title { font-size: 2.8rem; } .hero-circle { width: 240px; height: 240px; } .hero-circle .big-icon { font-size: 3.5rem; } .hero-circle .label { font-size: 1rem; } .hero-section { padding: 5rem 1.2rem 3rem; } }
        @media (max-width: 480px) { .hero-title { font-size: 2.2rem; } .hero-stats { grid-template-columns: 1fr 1fr; gap: 0.8rem; } .stat-value { font-size: 1rem; } }
      `}</style>
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="pulse-dot" /> Available for hire</div>
            <h1 className="hero-title"><span className="light">I'm in</span><br /><span className="name">Bandeye Khodaa</span></h1>
            <p className="hero-tagline">Crafting digital experiences with precision &amp; passion</p>
            <div className="hero-buttons">
              <button className="btn-primary"><i className="fas fa-paper-plane" style={{marginRight:'0.6rem'}} /> Contact me</button>
              <button className="btn-secondary"><i className="fas fa-eye" style={{marginRight:'0.6rem'}} /> View my work</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><span className="stat-label">Birthday</span><span className="stat-value">35 July 0001</span></div>
              <div className="stat-item"><span className="stat-label">Age</span><span className="stat-value">24 years</span></div>
              <div className="stat-item"><span className="stat-label">Degree</span><span className="stat-value">Master</span></div>
              <div className="stat-item"><span className="stat-label">City</span><span className="stat-value">Iran, Tehran</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle">
              <div className="big-icon">✦</div>
              <div className="label">Full‑Stack</div>
              <div className="sub-label">✦  Developer  ✦</div>
              <div className="dot-1" /><div className="dot-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
