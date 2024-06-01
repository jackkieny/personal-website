import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time')
      .then(res => res.json())
      .then(data => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="app">
      <Router>
      <header className="app-header">
        <Link to='/' className='app-header-link'>
          <h3 className='app-header-title'>Home</h3>
        </Link>
        <Link to='/about' className='app-header-link'>
          <h3 className='app-header-title'>About</h3>
        </Link>
        <Link to='/contact' className='app-header-link'>
          <h3 className='app-header-title'>Contact</h3>
        </Link>
      </header>
        <Routes>
          <Route exact path='/' 
            element={<Main/>}
          />
          <Route exact path='/about'
            element={<About/>}
          />
          <Route exact path='/contact'
            element={<Contact/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
