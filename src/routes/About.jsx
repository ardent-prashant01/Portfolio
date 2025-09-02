import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero02 from "../components/Hero02";
import AboutComponent from "../components/AboutComponent";
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero02 heading="About." text="I am a full stack developer."></Hero02>
      <AboutComponent></AboutComponent>
      <Footer></Footer>
    </div>
  );
};

export default About;
