import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name:'', email:'', message:'' });
  };

  return (
    <>
      <style>{`
        .contact-section { padding:5rem 2rem; background:#0c0f15; font-family:'Inter',sans-serif; color:#f0f4fa; border-top:1px solid rgba(255,255,255,0.06); }
        .contact-container { max-width:1280px; margin:0 auto; }
        .contact-header { text-align:center; margin-bottom:4rem; }
        .contact-header h2 { font-size:3rem; font-weight:800; letter-spacing:-0.02em; }
        .contact-header h2 .highlight { color:#2dd4bf; }
        .contact-header .sub { font-size:0.8rem; text-transform:uppercase; letter-spacing:0.2em; color:rgba(255,255,255,0.3); margin-top:0.5rem; font-weight:500; }
        .contact-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:4rem; align-items:start; }
        .contact-info { display:flex; flex-direction:column; gap:2rem; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:24px; padding:2.5rem; }
        .info-item { display:flex; align-items:flex-start; gap:1rem; }
        .info-icon { width:48px; height:48px; min-width:48px; background:rgba(45,212,191,0.1); border:1px solid rgba(45,212,191,0.15); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#2dd4bf; font-size:1.2rem; }
        .info-text { display:flex; flex-direction:column; }
        .info-label { font-size:0.7rem; text-transform:uppercase; letter-spacing:0.05em; color:rgba(255,255,255,0.3); font-weight:600; }
        .info-value { font-size:1rem; font-weight:500; color:#f0f4fa; margin-top:0.15rem; }
        .social-links { display:flex; gap:1rem; margin-top:0.5rem; }
        .social-link { width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); font-size:1.1rem; transition:all 0.3s ease; text-decoration:none; }
        .social-link:hover { background:rgba(45,212,191,0.1); border-color:#2dd4bf; color:#2dd4bf; transform:translateY(-3px); }
        .contact-form { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:24px; padding:2.5rem; }
        .form-group { margin-bottom:1.5rem; }
        .form-group label { display:block; font-size:0.85rem; font-weight:600; color:rgba(255,255,255,0.7); margin-bottom:0.4rem; }
        .form-group input, .form-group textarea { width:100%; padding:0.8rem 1.2rem; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; color:#f0f4fa; font-family:inherit; font-size:1rem; transition:border-color 0.3s ease, box-shadow 0.3s ease; outline:none; }
        .form-group input:focus, .form-group textarea:focus { border-color:#2dd4bf; box-shadow:0 0 0 3px rgba(45,212,191,0.1); }
        .form-group input::placeholder, .form-group textarea::placeholder { color:rgba(255,255,255,0.25); }
        .form-group textarea { resize:vertical; min-height:120px; }
        .btn-submit { width:100%; padding:0.9rem; background:#2dd4bf; color:#0c0f15; border:none; border-radius:12px; font-weight:700; font-size:1rem; cursor:pointer; transition:all 0.3s ease; box-shadow:0 8px 24px rgba(45,212,191,0.2); }
        .btn-submit:hover { transform:translateY(-3px); box-shadow:0 14px 32px rgba(45,212,191,0.3); background:#2dd4bf; }
        @media (max-width:1024px) { .contact-grid { gap:2.5rem; } .contact-header h2 { font-size:2.6rem; } }
        @media (max-width:768px) { .contact-grid { grid-template-columns:1fr; gap:2rem; } .contact-info, .contact-form { padding:1.8rem; } .contact-header h2 { font-size:2.2rem; } .contact-section { padding:3rem 1.2rem; } }
        @media (max-width:480px) { .contact-info, .contact-form { padding:1.2rem; } .info-item { gap:0.8rem; } .info-icon { width:40px; height:40px; min-width:40px; font-size:1rem; } }
      `}</style>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Contact <span className="highlight">Me</span></h2>
            <div className="sub">Let's work together</div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item"><div className="info-icon"><i className="fas fa-envelope" /></div><div className="info-text"><span className="info-label">Email</span><span className="info-value">bande@dev.ir</span></div></div>
              <div className="info-item"><div className="info-icon"><i className="fas fa-map-marker-alt" /></div><div className="info-text"><span className="info-label">Location</span><span className="info-value">Iran, Tehran</span></div></div>
              <div className="info-item"><div className="info-icon"><i className="fas fa-clock" /></div><div className="info-text"><span className="info-label">Availability</span><span className="info-value" style={{color:'#2dd4bf'}}><span className="pulse-dot" style={{display:'inline-block',width:'8px',height:'8px',background:'#2dd4bf',borderRadius:'50%',marginRight:'0.5rem',animation:'pulse 2s infinite'}} />Available for hire</span></div></div>
              <div><div className="info-label" style={{marginBottom:'0.5rem'}}>Follow me</div><div className="social-links"><a href="#" className="social-link"><i className="fab fa-github" /></a><a href="#" className="social-link"><i className="fab fa-linkedin-in" /></a><a href="#" className="social-link"><i className="fab fa-x-twitter" /></a><a href="#" className="social-link"><i className="fab fa-instagram" /></a></div></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group"><label htmlFor="name">Your Name</label><input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required /></div>
              <div className="form-group"><label htmlFor="email">Your Email</label><input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required /></div>
              <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required /></div>
              <button type="submit" className="btn-submit"><i className="fas fa-paper-plane" style={{marginRight:'0.6rem'}} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
