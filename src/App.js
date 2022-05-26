import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;