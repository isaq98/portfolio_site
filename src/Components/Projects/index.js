import React from 'react';
import { projectsEnum } from '../../Utils/WorkEnum';
import './_Projects.scss';

function Projects() {
    
    const renderProjectDivs = () => {
        return projectsEnum.map((project, index) => {
            return (
                <a href={project.link}>
                <div key={project.title} className={`project ${index}`}>
                <header>
                    <div className="folder-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-10 -10 170 40" fill="none" stroke="#F2AA4CFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-description-container">
                        <p>{project.description}</p>
                    </div>
                </header>
                <footer>
                <ul className="technology-list">
                    {project.technologies.map((language) => {
                        return (
                            <li className ="technology-item" key={language}>{language}</li>
                        )
                    })}
                </ul>
                </footer>
            </div>
            </a>
            )
        });
    }

    return(
        <section className="projects" id="projects">
            <h2 className="section-header">Things I Have Built </h2>
            <div className="projects-container">
                {renderProjectDivs()}
            </div>
            <div className="git-button-container">
                <a href="https://github.com/isaq98" target="_blank" rel="noopener noreferrer"><button className="git-button">See more on my GitHub</button></a>
            </div>
        </section>
    )
}

export default Projects;