import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  // BrowserRouter
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import ContactUs from './pages/ContactUs';
import Aboutpage from './pages/Aboutpage';
import ModalWithCards from './components/ModalForm/ModalWithCards';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="main-section" >
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/landingpagetwo" component={Homepage} />
                <Route path="/contact" component={ContactUs}/>
                <Route path="/about" component={Aboutpage} />
                <Route path="/modalforms" component={ModalWithCards} />
                <Route path="/404Error" component={ErrorPage}/>
            </Switch>
            
          </div>

      </div>
    </Router>
  );
}

export default App;
