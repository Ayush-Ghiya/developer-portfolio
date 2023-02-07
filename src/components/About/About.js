import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';




function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>Who I am.</h2>
                    <p style={{color:theme.tertiary80}}>My name is Ayush. I'm a web designer and developer based in Ahmedabad, India.<br/><br/>I love to learn and explore new arenas. I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude.  Love almost all the stacks of Software Engineering. My current stack includes Nodejs, React, NextJs, Bootstrap, Tailwind, Material UI, MongoDB, Mysql, Firebase, Cloudinary, etc.</p>
                </div>
                <div className="about-img">
                    <img 
                        src={theme.aboutimg1}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
