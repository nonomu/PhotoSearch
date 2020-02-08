import { observer} from 'mobx-react'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Photos from './components/Photos'
import NavBar from './components/NavBar'
// import Perf from 'react-addons-perf'; 
 const App =observer(() => {
   console.log("App render")
  return (
    <Router>
      <NavBar></NavBar>  
      <Route exact path='/' component={Home} />
      <Route exact path='/photos/:tags' component= {Photos} />
    </Router>
  );
})
export default  App
