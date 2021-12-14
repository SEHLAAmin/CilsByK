import React from 'react'
import Header from './Header'
import Home from './Home'
import {BrowserRouter , Route} from "react-router-dom"
import About from './About'
import Service from './Service'
import Contact from './Contact'
import "./App.css"
import { SliderData } from './SliderData'


function App(props) {
  return (
    
    <div className="app" >
<BrowserRouter>
  <Route slides={SliderData} exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/service" component={Service}/>
  <Route exact path="/contact" component={Contact}/>
</BrowserRouter>
    </div>
  )
}

export default App

