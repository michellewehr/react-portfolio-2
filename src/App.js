import './App.css';
import React, { useState} from 'react';
import NavBar from './components/NavBar';
import About from './components/About'
import Portfolio from './components/Portfolio';

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      // case 'Contact':
      //   return <Contact/>;
      // case 'Resume':
      //   return <Resume/>;
      default:
        return <About/>
    }
  }
  return (
   <main>
     <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
     <div>{renderPage()}</div>
     <div>
      <i className="fab fa-linkedin"></i>
      <i className="fab fa-github"></i>
      <i className="fas fa-envelope"></i>
     </div>
  </main>
  );
}

export default App;
