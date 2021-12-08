import React from 'react';
import Logo from '../../assets/images/blackIcon.png'
import 'bootstrap/dist/css/bootstrap.min.css';




function NavBar(props) {

  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header className="flex-row px-1">
    <a href="https://michellewehr.github.io/react-portfolio-2/#about">
        <img className="logo" src={Logo} alt="Michelle's logo"></img>
    </a>
    <nav>
    <ul className="nav nav-tabs row">
      {tabs.map(tab => (
        <li className="nav-item navItem col" key= {tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </nav>
    </header>
  );
  
     };


export default NavBar;