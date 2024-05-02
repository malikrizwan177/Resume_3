import React, { useState } from "react";
import { collabApps } from ".";
import { vite } from "../assets";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Skills = () => {
  const [centerImage, setCenterImage] = useState(vite);

  return (
    <section id="skills" className="py-10 md:py-20 lg:py-32 lg:px-20">
      <p className="heading">Skills</p>
      <hr />
      <div className="relative mt-16 left-1/2 flex w-[12rem] sm:w-[14rem] md:w-[17rem] lg:w-[25rem] aspect-square border border-gray-700 rounded-full -translate-x-1/2 scale:75 md:scale-100 ">
        <div className="flex w-32 sm:w-40 md:w-52 lg:w-60 aspect-square m-auto border border-gray-700 rounded-full">
          <div className="w-[4rem] md:w-[5rem] lg:w-[6rem] aspect-square m-auto p-[0.2rem] bg-[#24272C] navshadow  rounded-full">
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <img src={centerImage} width={40} height={40} alt="vite" className="rotate" />
            </div>
          </div>
        </div>
        <ul>
          {collabApps.map((app, index) => (
            <li
              key={app.id}
              className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                index * 45
              }`}
            >
              <ScrollAnimation animateIn="fadeInDown">
              <div
                onClick={() => setCenterImage(app.icon)}
                className={`relative -top-[1.6rem] flex w-[2.7rem] md:w-[3.2rem] h-[2.7rem] md:h-[3.2rem] hover:-translate-y-2 hover:scale-110 ease-in-out duration-500 bg-[#24272C] cursor-pointer navshadow rounded-xl -rotate-${
                  index * 45
                }`}
              >
                <img
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  alt={app.title}
                  src={app.icon}
                />
              </div>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
