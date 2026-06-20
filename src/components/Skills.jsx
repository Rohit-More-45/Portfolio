import React from 'react';

const Skills = () => {
  const backendSkills = [ { name: 'MySQL', value: 76 }, { name: 'PHP', value: 84 }, { name: 'Laravel', value: 79 } ];
  const frontendSkills = [ { name: 'C#', value: 95 }, { name: 'JavaScript', value: 80 }, { name: 'HTML / CSS', value: 85 } ];

  return (
    <>
      <style>{`
        .skills-section { padding: 5rem 2rem; background: #0c0f15; font-family: 'Inter', sans-serif; color: #f0f4fa; border-top: 1px solid rgba(255,255,255,0.06); }
        .skills-container { max-width: 1280px; margin: 0 auto; }
        .skills-header { text-align: center; margin-bottom: 3.5rem; }
        .skills-header h2 { font-size: 3rem; font-weight: 800; letter-spacing: -0.02em; }
        .skills-header h2 .highlight { color: #2dd4bf; }
        .skills-header .sub { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.3); margin-top: 0.5rem; font-weight: 500; }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .skill-category h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 1.8rem; color: #f0f4fa; display: flex; align-items: center; gap: 0.8rem; }
        .skill-category h3 .icon { color: #2dd4bf; font-size: 1.6rem; }
        .skill-item { margin-bottom: 1.6rem; }
        .skill-item:last-child { margin-bottom: 0; }
        .skill-label { display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 500; margin-bottom: 0.4rem; }
        .skill-label .name { color: rgba(255,255,255,0.8); }
        .skill-label .value { color: #2dd4bf; font-weight: 700; }
        .skill-bar { width: 100%; height: 6px; background: rgba(255,255,255,0.06); border-radius: 10px; overflow: hidden; }
        .skill-bar .fill { height: 100%; background: linear-gradient(90deg, #2dd4bf, #14b8a6); border-radius: 10px; transition: width 1.2s ease; width: 0; }
        @media (max-width: 768px) { .skills-section { padding: 3rem 1.2rem; } .skills-header h2 { font-size: 2.2rem; } .skills-grid { grid-template-columns: 1fr; gap: 2.5rem; } .skill-category h3 { font-size: 1.2rem; } }
        @media (max-width: 480px) { .skill-label { font-size: 0.85rem; } }
      `}</style>
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <div className="skills-header">
            <h2>My <span className="highlight">Skills</span></h2>
            <div className="sub">Technical Proficiency</div>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><span className="icon"><i className="fas fa-server" /></span> Backend Developer</h3>
              {backendSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-label"><span className="name">{skill.name}</span><span className="value">{skill.value}%</span></div>
                  <div className="skill-bar"><div className="fill" style={{ width: `${skill.value}%` }} /></div>
                </div>
              ))}
            </div>
            <div className="skill-category">
              <h3><span className="icon"><i className="fas fa-laptop-code" /></span> Frontend Developer</h3>
              {frontendSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-label"><span className="name">{skill.name}</span><span className="value">{skill.value}%</span></div>
                  <div className="skill-bar"><div className="fill" style={{ width: `${skill.value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
