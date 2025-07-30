/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
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

  const sendEmail = (e) => {
    e.preventDefault();

    // Show loading state
    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Get current date and time
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Prepare template parameters with all required fields
    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      time: timeString, // Add current time
    };

    console.log('Template params:', templateParams);

    emailjs.send(
      'service_ox4leni',    // Your Service ID
      'template_ua8igcl',   // Your Template ID  
      templateParams,
      'QfCLTKQay8QUUsw9O'   // Your Public Key
    )
    .then((result) => {
      console.log('SUCCESS!', result.status, result.text);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message sent successfully!',
        text: 'Thank you for your message. I\'ll get back to you soon!',
        showConfirmButton: false,
        timer: 3000
      });
      e.target.reset(); // Clear the form
    })
    .catch((error) => {
      console.error('FAILED...', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      
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
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
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
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component='span'> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings}/>
          </h1>
        </div>
      </Container>
    </section>
  );
};