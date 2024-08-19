// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
import './index.css';
import Navbar from './components/Navbar/Navbar';  // Import Navbar component
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TermsOfService from './components/Terms of service/Terms';
import PrivacyPolicy from './components/Privacy/Privacy';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TermsOfService />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
        </Routes>
<Footer/>
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
);
