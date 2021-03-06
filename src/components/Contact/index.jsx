import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.sass';
import validator from "validator";
import AuthIMG from '../../assets/images/profilePic.png';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validSubject, setValidSubject] = useState(true);

  const handleInput = (e) => {
    if (e.type === "change") {
      switch (e.target.name) {
        case "subject": {
          setSubject(e.target.value);
          break;
        }
        case "message": {
          setMessage(e.target.value);
          break;
        }
        case "name": {
          setName(e.target.value);
          break;
        }
        case "email": {
          setEmail(e.target.value);
          break;
        }
        default: {
          break;
        }
      }
    }
    switch (e.target.name) {
      case "subject": {
        if (e.target.value.length < 1) {
          setValidSubject(false);
        } else {
          setValidSubject(true);
        }
        break;
      }
      case "message": {
        if (e.target.value.length < 1) {
          setValidMessage(false);
        } else {
          setValidMessage(true);
        }
        break;
      }
      case "name": {
        if (e.target.value.length < 1) {
          setValidName(false);
        } else {
          setValidName(true);
        }
        break;
      }
      case "email": {
        if (!validator.isEmail(e.target.value)) {
          setValidEmail(false);
        } else {
          setValidEmail(true);
        }
        break;
      }
      default: break;
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setValidName(true);
    setValidEmail(true);
    setValidMessage(true);
    setValidSubject(true);
  };

  const sendClick = (e) => {
    e.preventDefault();
    if (validName && validEmail && validSubject && validMessage) {
      alert("Thank You! We will be in touch soon!");
      resetForm();
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <>
      <div className='showcaseC'>
        <h1>Contact</h1>
      </div>

      <div className='author'>
        <div className='auth'>

          <section className='logoCon'>

            <Link to='/'>
              <img className='sub-logoCon' src={AuthIMG} alt='author' />
            </Link>
          </section>
        </div>
      </div>

      <div className="contact-page">
        <div className="contact-page-container">
          <h1>Contact</h1>
          <h2>AndyAn7@gmail.com</h2>
        </div>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half-width">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={handleInput}
                  onBlur={handleInput}
                  value={name}
                />
                {!validName && <p className="error-message">Empty Name</p>}
              </li>
              <li className="half-width">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleInput}
                  onBlur={handleInput}
                  value={email}
                />
                {!validEmail && <p className="error-message">Invalid Email.</p>}
              </li>
              <li>
                <input className='sub-line'
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  onChange={handleInput}
                  onBlur={handleInput}
                  value={subject}
                />
                {!validSubject && <p className="error-message">Empty Subject.</p>}
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  onChange={handleInput}
                  onBlur={handleInput}
                  value={message}
                />
                {!validMessage && <p className="error-message">Empty Message.</p>}
              </li>
              <li>
                <input
                  type="submit"
                  className="contact-send"
                  value="SEND"
                  onClick={sendClick}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;