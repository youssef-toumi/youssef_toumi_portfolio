import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Worker Monitoring & Verification Pipeline",
      tags: ["Python", "PyTorch", "OpenCV", "Computer Vision", "Edge-Cloud", "Raspberry Pi"],
      description: "Developed a real-time AI system integrating face recognition, liveness detection, and activity monitoring. The system provides comprehensive monitoring capabilities through an intelligent dashboard that aggregates data, displays live video streams, and provides real-time alerts.",
      features: [
        "Real-time face recognition with liveness detection to prevent spoofing",
        "Activity monitoring system tracking worker engagement and status",
        "Centralized dashboard for multi-worker monitoring and supervision",
        "Edge-Cloud architecture deployed on Raspberry Pi and VPS",
        "Optimized pipelines achieving low-latency, real-time inference",
        "Privacy-focused design with secure data handling",
        "Scalable, modular architecture for real-world deployment"
      ],
      impact: "The dashboard transforms raw AI outputs into actionable insights, enabling supervisors to efficiently monitor multiple workers while maintaining privacy and security standards. Delivered a production-ready solution demonstrating professional integration of edge devices, cloud deployment, and user-friendly interfaces.",
      demoLink: "#",
      githubLink: "https://github.com/youssef-toumi/Woker-Monitoring-and-Verification-Pipeline-System"
    },
    {
      title: "Full-Stack E-Commerce Marketplace",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "REST API", "Authentication"],
      description: "Built a complete online marketplace application with modern full-stack architecture. The platform enables users to browse products, manage shopping carts, process secure payments, and track orders. Implemented robust authentication, secure payment processing with Stripe integration, and a responsive user interface.",
      features: [
        "Complete product catalog with detailed product pages and search functionality",
        "Secure user authentication and authorization system with JWT tokens",
        "Shopping cart management with persistent state across sessions",
        "Stripe payment integration with webhook handling for order processing",
        "Order tracking and management system for customers",
        "RESTful API architecture with Express.js backend",
        "MongoDB database with Mongoose ODM for data modeling",
        "Responsive React frontend with modern component architecture"
      ],
      impact: "Demonstrated end-to-end full-stack development capabilities by building a production-ready e-commerce platform. The application showcases proficiency in modern web technologies, secure payment processing, database design, and creating seamless user experiences from browsing to checkout.",
      demoLink: "#",
      githubLink: "https://github.com/youssef-toumi/online-marketplace"
    }
  ]

  const handleDemoClick = (e, demoLink) => {
    e.preventDefault()
    alert('Demo link will be added here. Replace this with your actual demo URL.')
    // Or: window.open(demoLink, '_blank')
  }

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card fade-in">
          <div className="project-header">
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-body">
            <p>{project.description}</p>
            <ul className="project-features">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <p><strong>Impact:</strong> {project.impact}</p>
            <div className="project-links">
              <button
                className="btn btn-primary"
                onClick={(e) => handleDemoClick(e, project.demoLink)}
              >
                View Demo
              </button>
              <a
                href={project.githubLink}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects