import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (

      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News key="home" category='general'/>}/>
          <Route exact path="/#" element={<News key="main" category='general'/>}/>
          <Route  exact  path="/general" element={<News key="general" category='general'/>}/>
          <Route  exact path="/sports" element={<News key="sports"  category='sports'/>}/>
          <Route  exact path="/entertainment"  element={<News key="entertainment" category='entertainment'/>}/>
          <Route  exact path="/business" element={<News key="business" category='business'/>}/>
          <Route  exact path="/science" element={<News key="science" category='science'/>}/>
          <Route  exact path="/technology" element={<News key="technology" category='technology'/>}/>
          <Route  exact path="/health" element={<News key="health"  category='health'/>}/>
        
        </Routes>
      </div>
    )
  }
}

