import React from 'react';
import profilePic from '../../assets/images/NHproPic.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="aboutBackground row">
            <div className="col-lg">
                <img className="profilePic" src={profilePic} alt="Michelle"></img>
            </div>
            <div className="nameBlock col-lg">
                <h2 className="cursive">Hello! I am...</h2>
                <h1 className="name lato">MICHELLE NAPOLITANO WEHR</h1>
                <h2 className="jobTitle"> Full Stack Developer</h2>
                <div className="aboutDescription">                
                <p className="aboutMe"> I am a passionate full-stack developer leveraging a background in sociology to provide unique insight and commitment to developing applications. I enjoy developing in both front-end and back-end environments and am dedicated to perpetually learning all that I can as a developer.</p>
                </div>
            </div>
        </div>
    )
}

export default About;