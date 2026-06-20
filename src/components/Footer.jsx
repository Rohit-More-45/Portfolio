import React from 'react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-section { padding:2rem 2rem; background:#0c0f15; font-family:'Inter',sans-serif; border-top:1px solid rgba(255,255,255,0.06); color:rgba(255,255,255,0.4); }
        .footer-container { max-width:1280px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; }
        .footer-copy { font-size:0.85rem; }
        .footer-copy .name { color:#2dd4bf; font-weight:600; }
        .footer-socials { display:flex; gap:1.2rem; }
        .footer-socials a { color:rgba(255,255,255,0.3); font-size:1.1rem; transition:color 0.3s ease, transform 0.3s ease; text-decoration:none; }
        .footer-socials a:hover { color:#2dd4bf; transform:translateY(-2px); }
        @media (max-width:600px) { .footer-container { flex-direction:column; text-align:center; gap:0.8rem; } .footer-section { padding:1.5rem 1.2rem; } }
      `}</style>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-copy">&copy; 2026 <span className="name">Bande</span> · Full-Stack Developer</div>
          <div className="footer-socials">
            <a href="#" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter" /></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
