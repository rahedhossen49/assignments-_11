import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Service from './component/Service';
import Project from './component/Project';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>      
      <Footer/>
    </div>
  );
};

export default App;