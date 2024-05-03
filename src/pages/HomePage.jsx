import { useEffect } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const HomePage = () => {
  useEffect(() => {
    // scroll to the hash in the URL
    const hash = window.location.hash;
    if (hash) {
      let element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
    </>
  );
};

export default HomePage;
