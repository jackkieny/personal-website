import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

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
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <h1>Hello</h1> 
              <p>The current time is {currentTime}</p>
              <Link to='/page2'>Go to page 2</Link>
            </>
          }
          />
          <Route exact path='/page2' element={
            <>
              <h1>Page 2</h1>
              <p>The current time is {currentTime}</p>
              <Link to='/'>Go back</Link>
            </>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
