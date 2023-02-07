import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';

import myimg from '../../assets/svg/avatar.svg'
import resume from '../../assets/pdf/resume.pdf'
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';


function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        
                            <a
                                href='https://in.linkedin.com/in/ayush-ghiya-9b2a12120'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        
                            <a
                                href='https://github.com/Ayush-Ghiya'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        
                        
                            <a
                                href='https://twitter.com/DuskyOp'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                       
                            <a
                                href='https://www.instagram.com/ayush_ghiya_/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Instagram'
                                />
                            </a>
                      
                        
                        
                    </div>
                </div>
                <img
                    src={myimg}
                    alt=''
                    className='landing--img'
                    style={{
                        borderColor: theme.secondary,
                    }}
                />
                
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary}}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        
                       
                        <h1>Ayush Ghiya</h1>
                        <Typed
                            strings={[
                                'Backend Developer',
                                'Frontend Developer',
                                'Fullstack Developer',
                                'Web Designer',        
                            ]}
                            typeSpeed={60}
                            backSpeed={80}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>Hello! I am Ayush, a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and I am Passionate about Problem Solving.</p>

                        <div className='lcr-buttonContainer'>
                            {resume && (
                                <a
                                    href={resume}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;
