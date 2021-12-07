import './App.css';
import React, { useState} from 'react';
import NavBar from './components/NavBar';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact  from './components/Contact';
import Resume from './components/Resume'

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      case 'Resume':
        return <Resume/>;
      default:
        return <About/>
    }
  }
  return (
   <main className="background">
     <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
     <div>{renderPage()}</div>
     <div className="contactFooter">
      <a href="https://www.linkedin.com/in/michelle-napolitano-wehr-012a5a214/"><i className="fab fa-linkedin fa-3x"></i></a>
      <a href="https://github.com/michellewehr"><i className="fab fa-github fa-3x"></i></a>
      <a href="mailto:michelle_wehr@icloud.com"><i className="fas fa-envelope fa-3x"></i></a>
     </div>
  </main>
  );
}

export default App;
