import  { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/connexion/Connexion';
import Inscription from './pages/inscription/Inscription';
import HomeUser from './pages/homesuser/HomeUser';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
    
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
