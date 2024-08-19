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
            I'm a Software Enginner with over 2 years of Experience in Frontend Web Development using React and Tailwind CSS. I've started my journey in the world of web development through my first remote internship where i built responsive lading pages through figma design files. To furthur enhance my skills in web development, I completed a remote MERN Stack Internship where i build real world projects using Vite+React and Tailwind CSS for the frontend and Node + Express + MonogDB for the backend.
        </p>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
