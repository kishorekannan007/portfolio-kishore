import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './index.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [projectLink, setProjectLink] = useState('');

  const openModal = (link) => {
    setProjectLink(link);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProjectLink('');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="profile">
          <img src="./images/Kishore.jpg" alt="Kishore Kannan G" className="profile-photo" />
        </div>
        <h1 className="title"> Hii there! Im Kishore Kannan G</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <About />
        <Skills />
        <Projects openModal={openModal} />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Kishore Kannan G. All rights reserved.</p>
      </footer>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h2>Project Details</h2>
            <p>Here you can view the details of the project: <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
