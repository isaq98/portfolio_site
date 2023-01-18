import React from 'react';
import { projectsEnum } from '../../Utils/WorkEnum';
import './_Projects.scss';

function Projects() {
    
    const renderProjectDivs = () => {
        return projectsEnum.map((project, index) => {
            return (
                <div key={project.title} className={`project ${index}`}>
                <header>
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
            )
        });
    }

    return(
        <section className="projects">
            <h2 className="section-header">Projects</h2>
            <div className="projects-container">
                {renderProjectDivs()}
            </div>
            <div className="git-button-container">
                <button className="git-button">See more on my GitHub</button>
            </div>
        </section>
    )
}

export default Projects;