import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Neural Networks"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL", "C++"]
    },
    {
      title: "Deployment & Tools",
      skills: ["Edge-Cloud", "Raspberry Pi", "Docker", "Git"]
    }
  ]

  return (
    <section id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills