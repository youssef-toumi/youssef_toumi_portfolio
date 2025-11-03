import React from 'react'

const About = () => {
  const stats = [
    { value: '2025', label: 'Graduated', icon: '🎓' },
    { value: '2+', label: 'Projects', icon: '💼' },
    { value: '3', label: 'Languages', icon: '🌍' },
    { value: '100%', label: 'Dedication', icon: '🚀' }
  ]

  const highlights = [
    {
      title: 'Engineer\'s Degree',
      description: "Computer Engineering, Polytechnic School of Sousse (Sep 2022 - Oct 2025)",
      icon: '🎓'
    },
    {
      title: 'Bachelor\'s Degree',
      description: 'Business Intelligence, Higher Institute of Management of Sousse (Sep 2019 - Oct 2022)',
      icon: '📚'
    },
    {
      title: 'Specialization',
      description: 'Computer Vision, Deep Learning, and Edge-Cloud AI Systems',
      icon: '🤖'
    },
    {
      title: 'Location',
      description: 'Nabeul, Tunisia',
      icon: '📍'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-tag">Get to know me</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Fresh graduate passionate about AI and Computer Vision</p>
      </div>

      <div className="about-container">
        <div className="about-main">
          <div className="about-text-card">
            <div className="profile-photo-container">
              <img src={`${process.env.PUBLIC_URL}/youssef.png`} alt="Youssef Toumi" className="profile-photo" />
            </div>
            <h3>Who I Am</h3>
            <p className="about-text">
              I'm passionate about <strong>Artificial Intelligence</strong> and <strong>Computer Vision</strong>,
              driven by the exciting challenge of teaching machines to see and understand the world around us.
              The intersection of AI and visual intelligence fascinates me because it opens doors to solving
              complex real-world problems in innovative ways.
            </p>
            <p className="about-text">
              My journey in AI has been fueled by curiosity and a love for continuous learning. I thrive on
              transforming theoretical concepts into practical solutions, whether it's building deep learning
              models for real-time applications or architecting scalable AI systems that bridge edge and cloud
              computing.
            </p>
            <p className="about-text">
              What excites me most is the potential of AI to create meaningful impact. I'm eager to contribute
              to projects that push technological boundaries and develop intelligent systems that make a
              difference in people's lives.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <span className="highlight-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-new">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
              <div className="stat-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About