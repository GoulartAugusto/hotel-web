import React from 'react';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import About from './components/About';
import Photos from './components/Photos';
import Accommodations from './components/Accommodations';
import Promotions from './components/Promotions';
import Location from './components/Location';
import Gastronomy from './components/Gastronomy';
import Events from './components/Events';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <About />
      <Photos />
      <Accommodations />
      <Gastronomy />
      <Promotions />
      <Location />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
