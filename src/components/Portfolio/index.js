import React from 'react';
import projects from '../../projects.json';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';

function Portfolio() {
    const projectsList = projects;
    return (
        <Wrapper>
        <h2 id="portfolio">My Work</h2>
        {projectsList.map(project => (
            <ProjectCard id={project.id}
            name = {project.name}
            image = {project.image}
            alt = {project.alt}
            deployed = {project.deployed}
            github = {project.github}
            tech = {project.tech}
            description = {project.description}/>
        ))}
        </Wrapper>
    )
}

export default Portfolio;