import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero02 from "../components/Hero02";
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero02 heading="CONTACT." text="Let's hav a chat."></Hero02>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
