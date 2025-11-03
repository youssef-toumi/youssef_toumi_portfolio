import React from 'react';

const Hero = () => {
  const downloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/cv.pdf`;
      link.download = 'Youssef_Toumi_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      window.open(`${process.env.PUBLIC_URL}/cv.pdf`, '_blank');
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Youssef Toumi</span>
        </h1>
        <p className="hero-subtitle">
          AI Engineer <span className="divider">•</span> Computer Vision Specialist
        </p>
        <p className="hero-description">
          Fresh graduate specializing in <strong>Computer Vision</strong> and <strong>Deep Learning</strong>,
          focused on designing and deploying end-to-end AI systems across cloud and edge environments.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">2025</span>
            <span className="stat-label">Graduated</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Languages</span>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            <span>View Projects</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn btn-secondary" onClick={downloadCV}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.83334 8.33333L10 12.5L14.1667 8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download CV</span>
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;