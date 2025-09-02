import "./Form.css";
import React from "react";

export default function Form() {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="username">Your Name:</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Type your message here."
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
