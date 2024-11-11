import { useState } from "react";
import React from 'react';
import "../css/contact.css";

export default function Contact () {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "88419c01-27b7-4c8d-a48b-3b9c7488b099");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-container">
      <form id="contact-form" onSubmit={onSubmit}>
        <p> 
          <label htmlFor="name">Name:</label> 
          <input type="text" name="name" required/>
        </p> 
        
        <p> 
          <label htmlFor="email">Email:</label> 
          <input type="email" name="email" required/> 
        </p> 
        
        <p> 
          <label htmlFor="message">Message:</label> 
          <textarea name="message" id="message" required></textarea> 
        </p> 
        
        <p> 
          <button type="submit">Submit Form</button> 
        </p>
      </form>
      <span>{result}</span>
    </div>
  );
}
