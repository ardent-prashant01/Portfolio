import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero02 from "../components/Hero02";
import Pricing from "../components/Pricing";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero02 heading="Projects." text="Some of my most recent works."></Hero02>
      <Work></Work>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
