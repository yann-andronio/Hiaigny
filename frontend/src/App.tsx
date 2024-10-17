import  { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/connexion/Connexion';
import Inscription from './pages/inscription/Inscription';
import HomeUser from './pages/homesuser/HomeUser';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Conseils from './pages/conseils/Conseils';
import Testes from './pages/testss/Testes';
import Reservation from './pages/reservation/Reservation';
import Chats from './pages/chats/Chats';

function App() {
  useEffect(() => {
    Aos.init(); 
}, []);


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/conseils" element={<Conseils />} />
          <Route path="/teste" element={<Testes />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/chats" element={<Chats />} />
    
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
