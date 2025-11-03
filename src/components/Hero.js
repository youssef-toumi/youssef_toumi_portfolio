import React from 'react';

const Hero = () => {
  const downloadCV = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      
      // Use the correct path - CV should be in public folder
      link.href = '/cv.pdf'; // Make sure your CV is in public/cv.pdf
      link.download = 'Youssef_Toumi_CV.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open('/cv.pdf', '_blank');
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
      <div className="hero-content">
        <h1>Youssef Toumi</h1>
        <p className="subtitle">AI Engineer | Computer Vision Specialist</p>
        <p className="description">
          Specializing in Computer Vision and Deep Learning, focused on designing and deploying 
          end-to-end AI solutions with edge-cloud architectures.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;