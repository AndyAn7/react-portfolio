import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
<<<<<<< HEAD
import Layout from './components/Layout';
=======
>>>>>>> 477ee3230261c78cbc4b3815e27cf1edaa4cfa5b

function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
=======
        <Route path="/" element={<Home />} />
>>>>>>> 477ee3230261c78cbc4b3815e27cf1edaa4cfa5b
      </Routes>
    </>
  );
}

export default App;