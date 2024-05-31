import React, { useState, useEffect } from 'react';
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
      <h1>Hello</h1> 
      <p>The current time is {currentTime}</p>
    </div>
  );
}

export default App;