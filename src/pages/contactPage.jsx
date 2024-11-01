import { useState } from "react";
import { validateEmail } from '../utils/helper';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email address is invalid.');
    } else if (!name) {
      setErrorMessage('Name is required.')
    } else if (!email) {
      setErrorMessage('Email is required.')
    } else if (!message) {
      setErrorMessage('Message is required.')
    } else {
      setErrorMessage('Your message has been submitted.')
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name address here"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email address here"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
        <Form />
    </div>
  );
}
