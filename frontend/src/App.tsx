import  { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/connexion/Connexion';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/user-info" element={<></>} />
    
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
