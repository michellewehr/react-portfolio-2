import React from 'react';
import resumeDoc from '../../assets/images/Dec1Resume.pdf';

function Resume() {
    return(
        <div className="resumeDiv row">
            <h2>Resume</h2>
            <a className="resumeLink" href={resumeDoc} target="_blank"  rel="noreferrer">
                <p>Download my Resume</p>
            </a>
            <div className="col-md front-end">
                <h3>Front-End Skills and Technologies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>AJAX</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Animation.css</li>
                    <li>Handlebars.js</li>
                </ul>
            </div>
            <div className="col-md back-end">
                <h3>Back-End Skills and Technologies</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;