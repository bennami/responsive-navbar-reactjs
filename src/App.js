import React from 'react';
import {Router} from '@reach/router';
import About from './pages/about.js';
import Blog from './pages/blog';
import Contact from './pages/contact.js';
import Portfolio from './pages/portfolio'
import Home from './pages/home';
import Nav from "./components/nav";
import logo from "./logo.svg"
import './App.css';
import "./assets/scss/base.scss"
function App() {
  const navLinks = [
    {
      text:'contact',
      path:'/contact',
      icon: 'ion-ios-megaphone'
    },

    {
      text:'about',
      path:'/about',
      icon: 'ion-ios-business'
    },
    {
      text:'portfolio',
      path:'/portgolio',
      icon: 'ion-ios-briefcase'
    },
    {
      text:'blog',
      path:'/blog',
      icon: 'ion-ios-bonfire'
    },

  ];
  return (
    <div className="App">
      <Nav
          navLinks={navLinks}
         /* bg={}
          hoverBg={}
          linkColor={}*/
       logo={logo}
      />
      <Router>
        <Contact path={"/contact"}/>
        <Portfolio path={"/portfolio"}/>
        <Home path={"/"}/>
        <Blog path={"/blog"}/>
        <About path={"about"}/>
    </Router>
    </div>
  );
}

export default App;
