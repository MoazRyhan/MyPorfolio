/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import { motion } from "framer-motion";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName},  MERN Stack Developer with expertise in building scalable and dynamic web applications. I have strong skills in both Frontend and Backend development, with proficiency in React.js, Next.js, Node.js, Express.js, and MongoDB. While I have experience in both areas, I prefer working in a Backend position where I can focus on building robust APIs, managing databases, and optimizing server-side performance. I am looking for an opportunity to contribute my skills to a dynamic team and work on innovative projects.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <motion.div
          className="about"
          initial={{ x: 100, opacity: 0 }} // الحركة من اليمين
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="_img"
            style={{
              background: `url(${profile})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>

          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message...</Typography>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
