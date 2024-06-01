import React from 'react'
import '../styles/about.css'

import { FaReact, FaDocker, FaLinode, FaGithub } from "react-icons/fa";
import { SiFlask, SiNginx, SiKubernetes } from "react-icons/si";
import { DiGithubFull } from "react-icons/di";

function About() {
    return (
        <div className='about-container'>
            <h1>PROJECT STACK</h1>
            <div className='icon-container'>
                <FaReact className='about-icon react-icon'/>
                <img src='/python-logo.png' alt='Python icon' className='python-logo'/>
                <SiFlask className='about-icon flask-icon'/>
                <SiNginx className='about-icon nginx-icon'/>
                <FaDocker className='about-icon docker-icon'/>
                <SiKubernetes className='about-icon kubernetes-icon'/>
                <FaLinode className='about-icon linode-icon'/>
                <FaGithub className='about-icon github-icon'/>
            </div>
            <div className='github-link-container'>
                <p>View this project on</p> 
                <a href='https://github.com/jackkieny/personal-website' target='_blank' rel='noreferrer noopener'>
                    <DiGithubFull className='github-full-icon'/>
                </a>
            </div>
        </div>
    )
}

export default About