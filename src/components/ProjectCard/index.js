import React from 'react';
import git from '../../assets/images/github.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectCard(props) {
    return (
        <div className="project col-5 mx-auto ">
            <div className="img-container">
                <a href={props.deployed}><img alt={props.alt} src={props.image}/></a>
            </div>
            <div className="project-description">
                <a href={props.github} target="_blank" rel="noreferrer">
                    <img className="git" src={git} alt="github icon"/>
                </a>
                <a className="deployed" href={props.deployed} target="_blank" rel="noreferrer">
                    <h4>{props.name}</h4>
                </a>
                <h5>{props.tech}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;