/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import { black } from './../theme/Themes';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  repoButton: {
    marginTop: theme.spacing(2),
    backgroundColor: 'transparent',
    color: '#333',
    border: '2px solid #333',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.3s ease',
    padding : '2px' ,
    '&:hover': {
      backgroundColor: 'rgba(58, 55, 55, 0.1)',
      backdropFilter: 'blur(50px)',
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    }
  }
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
       id: 1,
       title: 'LuckyBank',
       Type:"(back-end)",
       description: `Developed a secure and scalable online banking system with user authentication, account management, session handling, real-time money transfers using Socket.IO, and CSRF protection. Implemented password hashing, session-based login with multi-device limits, and secure token workflows for password reset and email verification.`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
      repoUrl: 'https://github.com/MoazRyhan/luckybank-back-sequelize', // Add your actual repo URL
    },
    {
       id: 2,
       title: 'Social Media App',
       Type:"(back-end)",
       description: `Built a dynamic real-time social media platform featuring comprehensive user management, interactive post creation with image uploads, real-time notifications, and live chat functionality. Implemented secure JWT authentication, RESTful APIs, database optimization with MongoDB, and WebSocket integration for instant updates. Features include user profiles, friend systems, content moderation, and scalable architecture designed to handle thousands of concurrent users.`,
      alter: 'Startup Project',
      image: `${Lacalle}`,
      repoUrl: 'https://github.com/yourusername/social-media-app', // Add your actual repo URL
      },
    {
       id: 3,
      title: 'Blog App',
      Type:"(back-end)",
       description: `Created a blog platform with user authentication, CRUD operations, and SQL database integration for managing posts.`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
      repoUrl: 'https://github.com/MoazRyhan/BlogApp-back-mySQL2', // Add your actual repo URL
    },
    {
       id: 4,
       title: 'Saraha App',
       Type:"(back-end)",
       description: `Developed an anonymous messaging app with Database integration for storing user messages. Secure API endpoints using JWT for authentication and authorization. Token-based features, such as user login sessions, secure data exchange, and role-based access control.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
      repoUrl: 'https://github.com/MoazRyhan/SarahaApp-back-NoSql', // Add your actual repo URL
     },
    {
       id: 5,
      title: 'E-commerce App',
      Type:"(Front-end)",
       description: `Built a responsive e-commerce platform with product filters, cart management, and secure checkout functionality.`,
      alter: 'Startup Project',
      image: `${Startup}`,
      repoUrl: 'https://moazryhan.github.io/Register', // Add your actual repo URL
     },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <h3 className="Type">
                { project.Type }
              </h3>
              <p className="description">
                { project.description }
              </p>
              {/* Repository Button */}
              <Button
                variant="outlined"
                className={classes.repoButton}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};