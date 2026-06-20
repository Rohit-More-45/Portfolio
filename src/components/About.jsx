import React from 'react';

const About = () => {
  return (
    <>
      <style>{`
        .about-section { padding: 5rem 2rem; background: #0c0f15; font-family: 'Inter', sans-serif; color: #f0f4fa; border-top: 1px solid rgba(255,255,255,0.06); }
        .about-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start; }
        .about-heading { position: sticky; top: 100px; }
        .about-heading h2 { font-size: 3rem; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
        .about-heading h2 .highlight { color: #2dd4bf; }
        .about-heading .sub { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.3); margin-top: 0.5rem; font-weight: 500; }
        .about-content { display: flex; flex-direction: column; gap: 2.5rem; }
        .about-text { font-size: 1.1rem; line-height: 1.8; color: rgba(255,255,255,0.7); max-width: 600px; }
        .about-text strong { color: #f0f4fa; }
        .about-stats { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; max-width: 500px; }
        .stat-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 1.2rem 1.5rem; transition: all 0.3s ease; }
        .stat-card:hover { background: rgba(45,212,191,0.06); border-color: rgba(45,212,191,0.2); transform: translateY(-4px); }
        .stat-number { font-size: 2.2rem; font-weight: 800; color: #2dd4bf; line-height: 1.2; }
        .stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: 0.2rem; }
        @media (max-width: 1024px) { .about-container { gap: 3rem; } .about-heading h2 { font-size: 2.6rem; } }
        @media (max-width: 768px) { .about-container { grid-template-columns: 1fr; gap: 2rem; } .about-heading { position: static; } .about-heading h2 { font-size: 2.4rem; } .about-text { max-width: 100%; } .about-stats { max-width: 100%; } .about-section { padding: 3rem 1.2rem; } }
        @media (max-width: 480px) { .about-stats { grid-template-columns: 1fr 1fr; gap: 1rem; } .stat-number { font-size: 1.8rem; } .stat-card { padding: 1rem; } }
      `}</style>
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-heading">
            <h2>About <span className="highlight">Me</span></h2>
            <div className="sub">Who I am</div>
          </div>
          <div className="about-content">
            <p className="about-text">
              I'm a full-stack developer with a deep passion for building beautiful,
              functional, and scalable digital solutions. With years of experience
              across the entire stack — from pixel-perfect frontends to robust
              backend systems — I bring ideas to life with code.
            </p>
            <div className="about-stats">
              <div className="stat-card"><div className="stat-number">24+</div><div className="stat-label">Years of Experience</div></div>
              <div className="stat-card"><div className="stat-number">30+</div><div className="stat-label">Projects Delivered</div></div>
              <div className="stat-card"><div className="stat-number">15+</div><div className="stat-label">Happy Clients</div></div>
              <div className="stat-card"><div className="stat-number">100%</div><div className="stat-label">Commitment</div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
