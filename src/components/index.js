import { brainwave, figma, html, javascript, mongodb, nodejs, css, react, resume4, harryphoto, bluecomm, tailwind, wordpress } from "../assets";

export const Nav = [
  {
    id: 1,
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 3,
    title: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    title: "Experience",
    link: "#experience",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
];

export const projectItems = [
  {
    id: 1,
    img: resume4,
    title: "Resume#4",
    desc: "The latest Portfolio resume, made with Vite+React and TailwindCSS",
    link: "https://resume-4-swart.vercel.app/"
  },
  {
    id: 2,
    img: harryphoto,
    title: "Harry Photo - Photo Gallery Website",
    desc: "A client project, made with MERN stack during my second internship",
    link: "https://harry-photo-frontend.vercel.app/"
  },
  {
    id: 3,
    img: bluecomm,
    title: "Blucomm Technolgies - Official Website",
    desc: "An official MERN stack website of the company",
    link: "https://blucomtechnologies.com/"
  },
  {
    id: 4,
    img: brainwave,
    title: "Brainwave",
    desc: "An AI website's frontend made with React and Tailwind CSS",
    link: "https://brainwave-theta-ten.vercel.app/"
  },
]

export const collabApps = [
  {
    id: "0",
    title: "HTML",
    icon: html,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "CSS",
    icon: css,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "JavaScript",
    icon: javascript,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "React",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Tailwind CSS",
    icon: tailwind,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Nodejs",
    icon: nodejs,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "MongoDb",
    icon: mongodb,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Figma",
    icon: figma,
    width: 38,
    height: 32,
  },
];

export const experiences = [
  {
    title: "Frontend React.js Intern",
    company_name: "Poiesis Technologies, Bahria Town, Islamabad, Pakistan",
    icon: react,
    iconBg: "#383E56",
    date: "OCT 2022 - OCT 2023",
    points: [
      "Review, discuss and plan the required framework and libraries with the product manager for website development.",
      "Use of Figma and the website design provided in it by the UI/UX team.",
      "Use of HTML5, Custom CSS, React, React-Bootstrap, npm packages for the development.",
      "Continuous upload to GitHub to keep the track and record of development.",
    ],
  },
  {
    title: "WordPress Frontend Developer",
    company_name: "Hotel Haveli One",
    icon: wordpress,
    iconBg: "#E6DEDD",
    date: "JAN 2024 - FEB 2024",
    points: [
      "Setting up the domain for the website on hostinger.",
      "Use of Elementor Plugin to produce classic and captivating landing and route pages.",
      "Ensuring cross-platform and device compatibility at it's fullest.",
      "By using the best SEO practices possible, the website got into first page of Google's search results.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "BlueSquare Technologies, Islamabad, Pakistan",
    icon: react,
    iconBg: "#383E56",
    date: "MAY 2024 - AUGUST 2024",
    points: [
      "Develop Responsive and Optimized React Web Applications using the best market practices and personal knowledge.",
      "Use of popular frameworks like Vite+React and TailwindCSS for the best frontend results",
      "Ensuring the use of my knowledge and experience to the fullest by creating projects for the company",
      "Use of nodejs, express, mongo db for backend along with Restful API's for a complete MERN stack project",
    ],
  },
];