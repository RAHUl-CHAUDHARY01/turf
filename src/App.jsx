import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ContactForm from './components/Contact';
import FamilyTravelSection from './components/Academy/Home';
import About from './components/AboutUs/About';
import TurfGamesPage from './components/Games/Games';
import FarmSportsPage from './components/Farms/Farms';
function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<HeroSection />} />
      <Route path="/destination/:country" element={<Destination />} /> */}
      <Route path='/contact' element={<ContactForm />} /> 
      <Route path='/academy' element={<FamilyTravelSection/>} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/games' element={<TurfGamesPage />} />
      <Route path='/farms' element={<FarmSportsPage />} />
    </Routes>
      </div>
  );
}

export default App;



