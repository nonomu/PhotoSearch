import { observer} from 'mobx-react'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Photos from './components/Photos'
import NavBar from './components/NavBar'
 const App =observer(() => {
  return (
    <Router>
      <NavBar></NavBar>  
      <Route exact path='/' component={Home} />
      <Route exact path='/photos/:tags' component={Photos}/>
      <Route exact path='/RandomPhotos' component={Photos}/>
    </Router>
  );
})
export default  App
