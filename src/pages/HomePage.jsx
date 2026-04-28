import React from 'react';
import Home from '../components/Home/Home';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </motion.div>
  );
};

export default HomePage;
