import React from "react";
import { aboutImage } from "../assets";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row my-10 lg:my-16 xl:my-32 lg:mx-20 xl:mx-40 lg:gap-20 xl:gap-32 justify-center items-center text-center text-white">
      <img
        src={aboutImage}
        alt="aboutImage"
        className="w-[180px] lg:w-[300px] h-[180px] lg:h-[300px] rounded-[20%] heroImgshadow my-5"
      />
      <ScrollAnimation animateIn="fadeInRight">
      <div className="flex flex-col text-center lg:text-start  overflow-hidden">
        <p className="heading">About me</p>
        <p className="text-xs lg:text-base my-5 font-light">
            I am actively seeking opportunities to apply my acquired skills and
            knowledge to real-world projects. My educational background has equipped
            me with a solid foundation in HTML, CSS and JavaScript. Additionally, I have gained practical experience through
            hands-on projects, both independently and collaboratively.
        </p>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
