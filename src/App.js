import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/Header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/VenueNfo';
import Highlights from './components/Hightlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/Header_footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px"}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="VenueNfo">
          <VenueNfo/>
        </Element>
        
        <Element name="Highlights">
          <Highlights/>
        </Element>
        
        <Element name="Pricing">
          <Pricing/>
        </Element>

        <Element name="Location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
