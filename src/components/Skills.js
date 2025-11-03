import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["Deep Learning", "Computer Vision", "OpenCV", "PyTorch", "Model Training & Optimization"]
    },
    {
      title: "Development",
      icon: "💻",
      skills: ["Python", "React.js", "SQL", "Git"]
    },
    {
      title: "MLOps & Deployment",
      icon: "🚀",
      skills: ["Edge AI Deployment", "Cloud Deployment", "Raspberry Pi", "Model Serving"]
    },
    {
      title: "Languages",
      icon: "🌍",
      skills: ["Arabic (Native)", "English (Fluent)", "French (Intermediate)"]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technical proficiencies across AI, development, and deployment</p>
      </div>

      <div className="skills-grid-modern">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-modern">
            <div className="skill-category-header">
              <span className="skill-category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag-item">
                  <span className="skill-tag-dot"></span>
                  <span className="skill-tag-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills