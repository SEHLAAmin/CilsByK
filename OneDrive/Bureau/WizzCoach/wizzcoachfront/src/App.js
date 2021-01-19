
import './App.css';
import Cam from './Cam'
import MenuAppBar from './component/MenuAppBar';
import Home from './component/Home'
import MyProfile from './component/MyProfile';
import { Router, Route, Switch,  browserHistory, IndexRoute  } from 'react-router';
import {BrowserRouter } from 'react-router-dom'
import { Box } from '@material-ui/core';
import CardCate from './component/CardCate';
import Auth from './component/Auth';
function App() {

  return (
    <div className="App">
    <BrowserRouter>
  <Switch>
    <Route exact from="/" render = {props => <Home {...props} />}/>
    <Route exact from="/Myprofile" render = {props => <MyProfile {...props} />}/>
    <Route exact from="/Auth" render = {props => <Auth {...props} />}/>

  </Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
