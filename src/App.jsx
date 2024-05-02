import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="m-8 md:m-9 lg:m-10 py-9 lg:py-14 px-10 lg:px-32 rounded-3xl shadow-inner mbg h-full mborder">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
};

export default App;
