import React from 'react';

const Resume = () => {
  const resumeData = [
    { id:1, title:'Frontend Development Course', company:'Online Academy', year:'2020', description:'Started the journey into web development by enrolling in a frontend course focused on HTML, CSS, and JavaScript fundamentals. Successfully completed the course and received a certification upon graduation.', type:'education' },
    { id:2, title:'Frontend Developer', company:'Innovate Studio', year:'2020 – 2021', description:'Worked as a frontend developer building dynamic web interfaces using React and CSS frameworks. Collaborated closely with designers to turn mockups into pixel-perfect user experiences.', type:'work' },
    { id:3, title:'Backend Development Bootcamp', company:'Code Masters', year:'2021', description:'After gaining experience in frontend, enrolled in a backend-focused program covering Node.js, Express, MongoDB, and API design. Built several full-featured server-side applications and worked with databases, authentication, and RESTful services. Certification', type:'education' },
    { id:4, title:'Full-Stack Developer', company:'Digital Nexus', year:'2021 – Present', description:'After transitioning into full-stack development, took on end-to-end ownership of projects—from designing the frontend to implementing backend logic and deploying applications. Worked in an agile team, contributing to scalable and maintainable codebases.', type:'work' },
  ];

  return (
    <>
      <style>{`
        .resume-section { padding: 5rem 2rem; background: #0c0f15; font-family: 'Inter', sans-serif; color: #f0f4fa; border-top: 1px solid rgba(255,255,255,0.06); }
        .resume-container { max-width: 1280px; margin: 0 auto; }
        .resume-header { text-align: center; margin-bottom: 3.5rem; }
        .resume-header h2 { font-size: 3rem; font-weight: 800; letter-spacing: -0.02em; }
        .resume-header h2 .highlight { color: #2dd4bf; }
        .resume-header .sub { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.3); margin-top: 0.5rem; font-weight: 500; }
        .timeline { position: relative; padding-left: 2.5rem; }
        .timeline::before { content: ''; position: absolute; left: 8px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(to bottom, rgba(45,212,191,0.3), rgba(45,212,191,0.05)); }
        .timeline-item { position: relative; margin-bottom: 2.5rem; padding-left: 1.5rem; }
        .timeline-item::before { content: ''; position: absolute; left: -2.5rem; top: 8px; width: 14px; height: 14px; border-radius: 50%; background: #2dd4bf; border: 3px solid #0c0f15; box-shadow: 0 0 0 4px rgba(45,212,191,0.15); }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-content { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 1.5rem 1.8rem; transition: border-color 0.3s ease, background 0.3s ease; }
        .timeline-content:hover { border-color: rgba(45,212,191,0.25); background: rgba(45,212,191,0.03); }
        .timeline-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; margin-bottom: 0.4rem; }
        .timeline-title { font-size: 1.2rem; font-weight: 700; color: #f0f4fa; }
        .timeline-company { font-size: 0.95rem; color: #2dd4bf; font-weight: 500; }
        .timeline-year { font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.05); padding: 0.2rem 0.9rem; border-radius: 30px; border: 1px solid rgba(255,255,255,0.06); }
        .timeline-desc { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin-top: 0.6rem; }
        .timeline-type { display: inline-block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.25); margin-top: 0.6rem; border: 1px solid rgba(255,255,255,0.06); padding: 0.1rem 0.8rem; border-radius: 30px; }
        @media (max-width: 768px) { .resume-section { padding: 3rem 1.2rem; } .resume-header h2 { font-size: 2.2rem; } .timeline { padding-left: 1.8rem; } .timeline-item { padding-left: 1rem; } .timeline-item::before { left: -1.8rem; width: 12px; height: 12px; } .timeline-content { padding: 1.2rem 1.4rem; } .timeline-header { flex-direction: column; align-items: flex-start; gap: 0.3rem; } }
        @media (max-width: 480px) { .timeline-year { font-size: 0.7rem; padding: 0.1rem 0.7rem; } }
      `}</style>
      <section className="resume-section" id="resume">
        <div className="resume-container">
          <div className="resume-header">
            <h2>My <span className="highlight">Resume</span></h2>
            <div className="sub">Journey & Experience</div>
          </div>
          <div className="timeline">
            {resumeData.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div><span className="timeline-title">{item.title}</span><span className="timeline-company"> · {item.company}</span></div>
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                  <span className="timeline-type">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
