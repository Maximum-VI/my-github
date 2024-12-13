import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Discounts from './components/Discounts';
import HowItWorks from './components/HowItWorks';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">
      <Hero />
      <Discounts />
      <HowItWorks />
      <FeaturedRestaurants />
      <CallToAction/>
      <Footer />
    </div>
  );
}

export default App;
