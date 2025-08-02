/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";
  const form = useRef();

  // Intersection observer
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      time: timeString,
    };

    emailjs.send(
      'service_ox4leni',
      'template_ua8igcl',
      templateParams,
      'QfCLTKQay8QUUsw9O'
    )
    .then((result) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message sent successfully!',
        text: 'Thank you for your message. I\'ll get back to you soon!',
        showConfirmButton: false,
        timer: 3000
      });
      e.target.reset();
    })
    .catch((error) => {
      let errorMessage = 'Something went wrong. Please try again or contact me directly.';
      if (error.status === 412) {
        errorMessage = 'Email service authentication failed. Please contact the site administrator.';
      } else if (error.status === 400) {
        errorMessage = 'Bad request. Please check all fields are filled correctly.';
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      }

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Failed to send message',
        text: errorMessage,
        showConfirmButton: true
      });
    });
  };

  return (
    <section id="contact" ref={ref}>
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <motion.div
            className="_form_wrapper"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                required
                className={classes.formfield}
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                required
                className={classes.formfield}
              />
              <TextField
                id="outlined-message-input"
                label="Message"
                multiline
                minRows={5}
                size="small"
                variant="filled"
                name="message"
                required
                className={classes.formfield}
              />
              <button type="submit" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component="span"> Send Message</Typography>
              </button>
            </form>
          </motion.div>

          <motion.h1
            className="contact_msg"
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TextDecrypt text={greetings} />
          </motion.h1>
        </div>
      </Container>
    </section>
  );
};
