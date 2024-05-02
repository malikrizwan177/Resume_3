import React, { useState } from "react";
import { projectItems } from ".";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Project = () => {
  const [value, setValue] = useState("1");

  const checkValue = ({ ...projectItems }) => {
    return projectItems.id == value;
  };

  return (
    <section id="projects" className="lg:px-20 my-20">
      <p className="heading">Projects</p>
      <hr />
      <div className="flex flex-row items-center justify-between md:justify-evenly my-7">
        <button onClick={() => setValue("1")} className="project_button">
          1
        </button>
        <button onClick={() => setValue("2")} className="project_button">
          2
        </button>
        <button onClick={() => setValue("3")} className="project_button">
          3
        </button>
        <button onClick={() => setValue("4")} className="project_button">
          4
        </button>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-10 lg:mt-14">
        <ScrollAnimation animateIn="fadeIn">
        {projectItems.filter(checkValue).map((item) => (
          <a
            href={item.link}
            target="_blank"
            key={item.id}
            className="w-full md:w-[650px] flex flex-col justify-center items-center p-5 rounded-2xl heroImgshadow text-center text-white hover:-translate-y-2 duration-500 cursor-pointer"
          >
            <img
              className="rounded-2xl w-[200px] md:w-[600px] h-[180px] md:h-[300px] object-cover"
              src={item.img}
              alt="resume#1"
            />
            <p className="heading mt-4">{item.title}</p>
            <p className="text-xs lg:text-base my-2 font-light">{item.desc}</p>
          </a>
        ))}
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Project;
