import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_LTR4y63OjrRMGVR07Eg0z");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Contact Form', 'template_pa3ttyq', e.target, 'user_LTR4y63OjrRMGVR07Eg0z')
      .then((result) => {
        window.alert('Message sent to Michelle!');
        document.querySelector("#contact-form").reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-section container-fluid">
    <h2>Contact Me</h2>
    <form id="contact-form" onSubmit={sendEmail}>
        <div>
            <label className="row">Name:</label>
            <input className="row" type="text" name="name"></input>
        </div>
        <div>
            <label className="row">Email:</label>
            <input className="row" type="email" name="email" ></input>
        </div>
        <div>
            <label className="row">Message:</label>
            <textarea className="row" type="text" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className="formBtn">Submit</button>
    </form>
    </div>
  );
};

export default Contact;

