import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/ShivamVikash/MERN1.git",
      liveDemoLink: "https://shivamvikash.github.io/MERN1/",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2.",
      technologies: ["BS", "JavaSript"],
      githubLink: "https://github.com/ShivamVikash/MERN2.git",
      liveDemoLink: "https://shivamvikash.github.io/MERN2/",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies used:</strong> {project.technologies.join(', ')}</p>
            <p><a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
