import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, useLocation} from 'react-router-dom';


import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Learnings from './components/Learnings';
import Footer from './components/Footer';

const AllRoutes = () => (
  <div>
    <About />
    <Projects />
    <Resume />
    <Learnings />
    <Skills />
  </div>
);

const ScrollToElement = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <Router>
      <Header />
      <ScrollToElement />
      <AllRoutes />
      <Footer />
    </Router>
  );
}

export default App;
