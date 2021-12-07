import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';



function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };

      const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };


    return (
        <div className="contact-section container-fluid">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="row">Name:</label>
                    <input className="row" type="text" name="name" defaultValue={name}></input>
                </div>
                <div>
                    <label className="row">Email:</label>
                    <input className="row" type="text" name="email" defaultValue={email}></input>
                </div>
                <div>
                    <label className="row">Message:</label>
                    <textarea className="row" type="text" name="message" rows="5" defaultValue={message}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="formBtn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
