import React from 'react';
import git from '../../assets/images/github-sign.png'

function ProjectCard(props) {
    return (
        <div className="project">
            <div className="img-container">
                <a href={props.deployed}><img alt={props.alt} src={props.image}/></a>
            </div>
            <div className="project-description">
                <a href={props.github}>
                    <img src={git} alt="github icon"/>
                </a>
                <h4>{props.name}</h4>
                <h5>{props.tech}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;