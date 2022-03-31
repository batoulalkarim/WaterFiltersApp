import React from 'react';
import Login from '../Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage';
import Nav from '../Nav';
import About from '../About';
import Ourimpact from '../Ourimpact';
import Partners from '../Partners';
import Homevideo from '../Homevideo';

function App() {
  return (
    <div className="container">
     <Router>
       <div className='google'>
       <Login />
       </div>
     <Nav />
     <Homevideo />
     <Switch>
       <Route path="/" component={Homepage}>
         <Homepage />
       </Route>
       <Route path="/about" component={About}>
         <About />
       </Route>
       <Route path="/ourimpact" component={Ourimpact}>
         <Ourimpact />
       </Route>
       <Route path="/partners" component={Partners}>
         <Partners />
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;