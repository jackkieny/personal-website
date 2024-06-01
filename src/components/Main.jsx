import React from 'react'
import '../styles/main.css'
import { LuConstruction } from "react-icons/lu";

function Main() {
  return (
      <div className='main-container'>
        <hr className='hr-divider'/>
        <h1>Hello!</h1>
        <div>
            <LuConstruction className='construction-icon'/>
            <LuConstruction className='construction-icon'/>
            <LuConstruction className='construction-icon'/>
        </div>
        <h4>This website is currently under construction.</h4>
        <p>Last Updated: May 31st, 2024</p>
        <hr className='hr-divider'/>
    </div>
  )
}

export default Main