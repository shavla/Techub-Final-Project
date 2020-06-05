import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import Cart from './Cart';
import Item from './Item';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }
  return (
    <Router>
      <div>
        <div className="header">
          <div className="nav">
            <button id="but" className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </button>
            <div id="myLinks">
              <ul>
                <li>
                  <Link to="/" onClick={myFunction}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={myFunction}>About</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={myFunction}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="title">
            <h1>Project</h1>
          </div>
          <div className="cart">
            <Link to="/cart">Cart </Link>
          </div>
        </div>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/:itemId">
            <Item />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


