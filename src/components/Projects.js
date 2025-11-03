import React, { useState } from 'react'
import VideoModal from './VideoModal'

const Projects = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    videoUrl: '',
    title: ''
  })

  const projects = [
    {
      title: "Worker Monitoring & Verification Pipeline System",
      tags: ["Python", "PyTorch", "OpenCV", "Computer Vision", "Edge-Cloud", "Raspberry Pi"],
      company: "Avempace",
      period: "February 2025 - August 2025",
      description: "Developed and integrated Deep Learning models for Face Recognition, Liveness Detection, and Activity Monitoring, forming a unified end-to-end Computer Vision system. Built a centralized, intelligent dashboard to visualize AI inferences in real time, transforming model outputs into actionable insights.",
      features: [
        "Integrated face recognition with liveness detection to prevent spoofing attacks",
        "Activity monitoring system tracking worker engagement and operational status",
        "Centralized dashboard for real-time multi-worker monitoring and supervision",
        "Edge-Cloud architecture deployed on Raspberry Pi and VPS infrastructure",
        "Optimized inference pipelines for low-latency, high-accuracy performance",
        "Privacy-focused design with secure data handling and storage",
        "Production-ready, scalable architecture for real-world deployment"
      ],
      impact: "Transformed raw AI outputs into actionable insights through an intelligent dashboard, enabling supervisors to efficiently monitor multiple workers while maintaining privacy and security standards. Delivered a production-ready solution demonstrating professional integration of edge devices, cloud deployment, and user-friendly interfaces.",
      demoLink: `${process.env.PUBLIC_URL}/demos/wmvp_demo.mp4`,
      githubLink: "https://github.com/youssef-toumi/Woker-Monitoring-and-Verification-Pipeline-System"
    },
    {
      title: "Full-Stack E-Commerce Platform",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "MERN Stack"],
      company: "DM Service Informatique",
      period: "February 2022 - May 2022",
      description: "Contributed to the design and full-stack development of a MERN-stack e-commerce platform, integrating a robust product catalog, shopping cart system, and secure payment functionality. Enhanced user experience (UX) and optimized operational workflows across the platform.",
      features: [
        "Complete product catalog with advanced search and filtering capabilities",
        "Secure user authentication and authorization system",
        "Shopping cart management with persistent state and checkout flow",
        "Stripe payment integration for secure transaction processing",
        "Order management and tracking system for customers",
        "RESTful API architecture with Express.js backend",
        "MongoDB database with Mongoose ODM for data modeling",
        "Responsive React frontend optimized for user experience"
      ],
      impact: "Delivered a fully functional, secure, and user-friendly e-commerce website, demonstrating end-to-end mastery of full-stack web development principles from frontend to backend. Facilitated smooth browsing, shopping, and secure transactions for customers.",
      demoLink: "#",
      githubLink: "https://github.com/youssef-toumi/online-marketplace"
    }
  ]

  const handleDemoClick = (project) => {
    setModalState({
      isOpen: true,
      videoUrl: project.demoLink,
      title: project.title
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      videoUrl: '',
      title: ''
    })
  }

  return (
    <section id="projects" className="projects-section">
      <VideoModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        videoUrl={modalState.videoUrl}
        title={modalState.title}
      />
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Real-world applications showcasing my technical expertise</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card-modern">
            <div className="project-card-inner">
              <div className="project-number">0{index + 1}</div>

              <div className="project-header-modern">
                <div className="project-icon">
                  {index === 0 ? '🤖' : '🛒'}
                </div>
                <div className="project-meta">
                  {project.company && (
                    <span className="project-company">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      {project.company}
                    </span>
                  )}
                  {project.period && (
                    <span className="project-period">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {project.period}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="project-title-modern">{project.title}</h3>

              <div className="project-tags-modern">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag-modern">{tag}</span>
                ))}
              </div>

              <p className="project-description-modern">{project.description}</p>

              <div className="project-features-modern">
                <h4>Key Features</h4>
                <ul>
                  {project.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-impact-modern">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor" />
                </svg>
                <strong>Impact:</strong> {project.impact}
              </div>

              <div className="project-links-modern">
                <button
                  className="project-btn project-btn-primary"
                  onClick={() => handleDemoClick(project)}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fill="currentColor" />
                  </svg>
                  View Demo
                </button>
                <a
                  href={project.githubLink}
                  className="project-btn project-btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects