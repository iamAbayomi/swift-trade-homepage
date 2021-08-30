import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  // BrowserRouter
} from 'react-router-dom';
import ContactUs from './ContactUs';
import Aboutpage from './Aboutpage';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="main-section" >
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/contact" component={ContactUs}/>
                <Route path="/about" component={Aboutpage} />

            </Switch>
            
          </div>

      </div>
    </Router>
  );
}

export default App;
