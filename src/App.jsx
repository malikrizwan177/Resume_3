import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
const Hero = lazy(() => import("./components/Hero"))
const About = lazy(() => import("./components/About"))
const Project = lazy(() => import("./components/Project"))
const Skills = lazy(() => import("./components/Skills"))
const Experience = lazy(() => import("./components/Experience"))
const Contact = lazy(() => import("./components/Contact"))

const App = () => {
  return (
    <div className="m-8 md:m-9 lg:m-10 py-9 lg:py-14 px-10 lg:px-32 rounded-3xl shadow-inner mbg h-full mborder">
      <Navbar/>
      <Suspense>
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Experience/>
        <Contact/>
      </Suspense>
    </div>
  );
};

export default App;
