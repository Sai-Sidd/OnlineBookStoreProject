import Header from "../../components/header/Header";
import "./about.css";
import React from "react";
const About = () => {
  return (
    <>
    <Header/>
    <section className="about">
      <h1>About Us</h1>
      <p>We are an online book store</p>
      <p>
        <strong>Version: 1.0.0</strong>
      </p>
    </section>
    </>
  );
};

export default About;
