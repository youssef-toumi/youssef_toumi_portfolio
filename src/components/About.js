import React from 'react'

const About = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '5+', label: 'AI Projects' },
    { value: '3', label: 'Languages' },
    { value: '100%', label: 'Commitment' }
  ]

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div>
          <p className="about-text">
            AI Engineer with hands-on experience in designing and deploying end-to-end AI solutions. 
            Skilled in developing and optimizing deep learning models for real-time applications using 
            Python, PyTorch, and OpenCV.
          </p>
          <p className="about-text">
            Currently pursuing an Engineer's Degree in Computer Engineering at Polytechnic School of Sousse. 
            Passionate about building scalable AI systems with edge-cloud deployment for distributed environments.
          </p>
        </div>
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About