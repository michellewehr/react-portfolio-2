import React from 'react';
// import projects from '../../projects.json';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';



function Portfolio() {
    const projectsList = [
        {
            "id": 1,
            "name": "Homeroom",
            "image": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F56931f0f-f2c6-4da7-bedb-792b921cb2e7.jpg?fit=scale-down&source=next&width=700",
            "alt": "student raising their hand",
            "deployed": "https://homeroomportal.herokuapp.com/",
            "github": "https://github.com/michellewehr/homeroom",
             "tech": "MySQL, Sequelize, Node.js, Express.js, JavaScript, Bootstrap, Animation.css",
             "description": "An application for teachers to store and create lesson plans, manage grade books, and manage class rosters."
        },
        {
            "id": 2,
            "name": "MovieFoodie",
            "image": "https://media.wired.com/photos/5e97905fa8fb770008c8478d/master/pass/Cul-movietheater-1191021389.jpg",
            "alt": "an empty movie theater",
            "deployed": "https://michellewehr.github.io/MovieFoodie/",
            "github": "https://github.com/michellewehr/MovieFoodie",
             "tech": "HTML, CSS, Bulma, JavaScript, AJAX",
             "description": "An application allowing users to view search movies by name, category, and date released. Upon searching a movie, users can view streaming and rental options. Users can save favorite movies to their watch list and browse snacks by ingredient to enjoy while watching their movies."
        },
        {
            "id": 3,
            "name": "Employee Manager",
            "image": "https://cdn.corporatefinanceinstitute.com/assets/affiliated-companies-1024x614.jpeg",
            "alt": "Towering buildings to represent companies",
            "deployed": "https://watch.screencastify.com/v/j4P13wrOCDF2ZOEPYKQI",
            "github": "https://github.com/michellewehr/company-employee-tracker",
             "tech": "Node.js, SQL",
             "description": "A back-end project allowing users to manage an employee database using SQL database."
        },
        {
            "id": 4,
            "name": "Budget Tracker",
            "image": "https://thecurrent.pk/wp-content/uploads/2021/06/9zz.jpg",
            "alt": "Budgeting tools",
            "deployed": "http://budget-tracker-proj.herokuapp.com/",
            "github": "https://github.com/michellewehr/Budget-Tracker",
             "tech": "Node.js, MongoDB, Express.js, IndexedDb",
             "description": "A PWA(progressive web application) that serves as a budget tracking applications for users who would like to track their withdrawals and deposits with or without internet."
        },
        {
            "id": 5,
            "name": "Note Taker",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDvbskosgJStR5BhDSUN9jjbVoXjs4vIduA&usqp=CAU",
            "alt": "Screenshot of Note Taker application",
            "deployed": "https://safe-beach-19758.herokuapp.com/",
            "github": "https://github.com/michellewehr/note-taker",
             "tech": "Node.js, Express.js, JavaScript, HTML, CSS",
             "description": "An application where users can make notes on any subject they wish. Notes can be saved, added, and deleted."
        },
        {
            "id": 6,
            "name": "Work Day Planner",
            "image": "https://pyxis.nymag.com/v1/imgs/9d4/f4a/4c054ba4b698f13e9393dc59a7bb8882df-day--.png",
            "alt": "Planner",
            "deployed": "https://michellewehr.github.io/calendar-app/",
            "github": "https://github.com/michellewehr/calendar-app",
             "tech": "HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js",
             "description": "An application where users can schedule their work days in hourly time slots. Hours that have past will show in grey, current hour will be coded red, and future hour blocks will be green."
        }
    ];
    // const projectsList = projects;

    return (
        <div className="container-fluid">
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
                description = {project.description}
                key={project.id}/>
            ))}
            </Wrapper>
        </div>
    )
}

export default Portfolio;