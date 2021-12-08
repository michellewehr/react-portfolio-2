import React from 'react';
import Logo from '../../assets/images/blackIcon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";




function NavBar(props) {

  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header className="flex-row px-1">
    <a href="https://michellewehr.github.io/react-portfolio-2/">
        <img className="logo" src={Logo} alt="Michelle's logo"></img>
    </a>
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
               {tabs.map(tab => (
            <Nav.Link className="nav-item navItem col"  style={{'font-size': "1.5rem"}} key= {tab}
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }>
            {tab}
        </Nav.Link>
      ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
  );
  
     };


export default NavBar;