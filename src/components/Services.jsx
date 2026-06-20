import React from 'react';

const Services = () => {
  const servicesData = [
    { icon:'fa-tachometer-alt', title:'Speed & Optimization', desc:'Improving load times, SEO, and overall user experience through code and asset optimization.' },
    { icon:'fa-layer-group', title:'Full-Stack Solutions', desc:'End-to-end development from frontend UI to backend infrastructure and deployment.' },
    { icon:'fa-server', title:'Backend Development', desc:'Developing secure and scalable server-side logic, APIs, and database integration.' },
    { icon:'fa-paint-brush', title:'Frontend Development', desc:'Building responsive, user-friendly web interfaces using modern frameworks like React or Vue.' },
  ];

  return (
    <>
      <style>{`
        .services-section { padding:5rem 2rem; background:#0c0f15; font-family:'Inter',sans-serif; color:#f0f4fa; border-top:1px solid rgba(255,255,255,0.06); }
        .services-container { max-width:1280px; margin:0 auto; }
        .services-header { text-align:center; margin-bottom:3.5rem; }
        .services-header h2 { font-size:3rem; font-weight:800; letter-spacing:-0.02em; }
        .services-header h2 .highlight { color:#2dd4bf; }
        .services-header .sub { font-size:0.8rem; text-transform:uppercase; letter-spacing:0.2em; color:rgba(255,255,255,0.3); margin-top:0.5rem; font-weight:500; }
        .services-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:2rem; }
        .service-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:20px; padding:2rem 1.8rem; text-align:center; transition:all 0.3s ease; }
        .service-card:hover { background:rgba(45,212,191,0.04); border-color:rgba(45,212,191,0.2); transform:translateY(-6px); }
        .service-icon { font-size:2.8rem; color:rgba(45,212,191,0.6); margin-bottom:1.2rem; transition:color 0.3s ease; }
        .service-card:hover .service-icon { color:#2dd4bf; }
        .service-title { font-size:1.2rem; font-weight:700; margin-bottom:0.6rem; color:#f0f4fa; }
        .service-desc { font-size:0.95rem; color:rgba(255,255,255,0.5); line-height:1.6; }
        @media (max-width:768px) { .services-section { padding:3rem 1.2rem; } .services-header h2 { font-size:2.2rem; } .services-grid { grid-template-columns:1fr 1fr; gap:1.2rem; } }
        @media (max-width:480px) { .services-grid { grid-template-columns:1fr; } }
      `}</style>
      <section className="services-section" id="services">
        <div className="services-container">
          <div className="services-header">
            <h2>My <span className="highlight">Services</span></h2>
            <div className="sub">What I Offer</div>
          </div>
          <div className="services-grid">
            {servicesData.map((svc, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon"><i className={`fas ${svc.icon}`} /></div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
