import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import contactMe from "../../assets/cover/contact-me.jpg";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // console.log("errorMessage", errorMessage);
  }

  // console.log(formState);

  // JSX
  return (
    <section>
      <img
          src={contactMe}
          className="my-2"
          style={{ width: "25%" }}
          alt="contact-me"
        />
      
      {/* <h1 className="imgContact fas fa-id-card-alt"> Contact me</h1> */}
{/* 
      <h2>GITHUB</h2>
      <h2>GITHUB</h2>
      <h2>GITHUB</h2>
      <h2>GITHUB</h2> */}

      <div>
      <form id="contact-form" onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
        
        
      </form>
      </div>
    </section>
  );
}

export default ContactForm;
