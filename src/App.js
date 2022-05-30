import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.sass';
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="header" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;