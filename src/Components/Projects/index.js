import React from 'react';
import { projectsEnum } from '../../Utils/WorkEnum';
import './_Projects.scss';

function Projects() {
    
    const renderProjectDivs = () => {
        return projectsEnum.map((project) => {
            return (
                <div key={project.title}>
                <header>
                    <h3>{project.title}</h3>
                    <div className="project-description-container">
                        <p>{project.description}</p>
                    </div>
                </header>
                <footer>
                <ul>
                    {project.technologies.map((language) => {
                        return (
                            <li key={language}>{language}</li>
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
        </section>
    )
}

export default Projects;