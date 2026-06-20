import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const links = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.toLowerCase());
      let current = 'Home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id.charAt(0).toUpperCase() + id.slice(1);
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar-root { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(10,14,23,0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 0 2rem; font-family: 'Inter', sans-serif; }
        .navbar-container { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; height: 72px; }
        .logo { display: flex; align-items: center; gap: 0.6rem; cursor: pointer; }
        .logo-icon { font-size: 1.8rem; color: #2dd4bf; transition: transform 0.3s ease; }
        .logo:hover .logo-icon { transform: rotate(90deg) scale(1.1); }
        .logo-text { font-size: 1.4rem; font-weight: 700; color: #f0f4fa; }
        .logo-highlight { color: #2dd4bf; }
        .desktop-nav { display: flex; align-items: center; gap: 0.5rem; }
        .nav-link { position: relative; background: transparent; border: none; padding: 0.5rem 1.2rem; font-size: 0.9rem; font-weight: 500; color: rgba(255,255,255,0.5); cursor: pointer; transition: color 0.25s ease, background 0.25s ease; border-radius: 40px; }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .nav-link.active { color: #fff; background: rgba(45,212,191,0.12); }
        .nav-indicator { position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%); width: 20px; height: 3px; background: #2dd4bf; border-radius: 4px; animation: slideIn 0.3s ease; }
        @keyframes slideIn { from { width: 0; opacity: 0; } to { width: 20px; opacity: 1; } }
        .hire-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(45,212,191,0.12); border: 1px solid rgba(45,212,191,0.2); border-radius: 40px; padding: 0.3rem 1.2rem 0.3rem 1rem; font-size: 0.75rem; font-weight: 600; color: #2dd4bf; margin-left: 1rem; white-space: nowrap; }
        .pulse-dot { display: inline-block; width: 8px; height: 8px; background: #2dd4bf; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.4); } }
        .mobile-toggle { display: none; background: transparent; border: none; width: 40px; height: 40px; cursor: pointer; padding: 0; position: relative; }
        .hamburger { display: block; width: 24px; height: 2px; background: #f0f4fa; border-radius: 2px; position: relative; transition: all 0.3s ease; }
        .hamburger::before, .hamburger::after { content: ''; position: absolute; width: 24px; height: 2px; background: #f0f4fa; border-radius: 2px; transition: all 0.3s ease; }
        .hamburger::before { top: -8px; } .hamburger::after { bottom: -8px; }
        .hamburger.open { background: transparent; }
        .hamburger.open::before { transform: rotate(45deg); top: 0; }
        .hamburger.open::after { transform: rotate(-45deg); bottom: 0; }
        .mobile-menu { display: none; flex-direction: column; gap: 0.2rem; padding: 1.5rem 0 2rem 0; border-top: 1px solid rgba(255,255,255,0.06); background: rgba(10,14,23,0.95); backdrop-filter: blur(20px); }
        .mobile-menu.open { display: flex; }
        .mobile-link { background: transparent; border: none; padding: 0.8rem 1rem; font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.6); text-align: left; cursor: pointer; border-radius: 12px; transition: background 0.2s, color 0.2s; }
        .mobile-link:hover { background: rgba(255,255,255,0.04); color: #fff; }
        .mobile-badge { margin-top: 0.8rem; padding: 0.8rem 1rem; display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; font-weight: 500; color: #2dd4bf; border: 1px solid rgba(45,212,191,0.15); border-radius: 40px; background: rgba(45,212,191,0.05); }
        @media (max-width: 768px) { .desktop-nav { display: none; } .mobile-toggle { display: block; } .navbar-root { padding: 0 1.2rem; } }
        @media (min-width: 769px) { .mobile-menu { display: none !important; } }
      `}</style>
      <header className="navbar-root">
        <div className="navbar-container">
          <div className="logo" onClick={() => scrollTo('home')}>
            <span className="logo-icon">✦</span>
            <span className="logo-text">Bande<span className="logo-highlight">.</span>dev</span>
          </div>
          <nav className="desktop-nav">
            {links.map((link) => (
              <button key={link} className={`nav-link ${active === link ? 'active' : ''}`} onClick={() => scrollTo(link)}>
                {link}
                {active === link && <span className="nav-indicator" />}
              </button>
            ))}
            <span className="hire-badge"><span className="pulse-dot" /> Available</span>
          </nav>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className={`hamburger ${isOpen ? 'open' : ''}`} />
          </button>
        </div>
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <button key={link} className="mobile-link" onClick={() => scrollTo(link)}>{link}</button>
          ))}
          <div className="mobile-badge"><span className="pulse-dot" /> Available for hire</div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
