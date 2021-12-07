import React from 'react';
import profilePic from '../../assets/images/NHproPic.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="aboutBackground row">
            <div className="col">
                <img className="profilePic" src={profilePic} alt="Michelle"></img>
            </div>
        <div className="nameBlock col">
            <h2 className="cursive">Hello! I am...</h2>
            <h1 className="name lato">MICHELLE NAPOLITANO WEHR</h1>
            <h2 className="jobTitle"> Full Stack Developer</h2>
            <div className="aboutDescription">                
             <p className="aboutMe">Greetings from Connecticut! I am Michelle, a passionate full-stack developer leveraging a background in sociology to provide unique insight and commitment to developing applications.</p>
            </div>
        </div>
        </div>
    )
}

export default About;