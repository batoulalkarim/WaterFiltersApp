import React from 'react';
import Login from '../Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage';
import Nav from '../Nav';
import About from '../About';
import Ourimpact from '../Ourimpact';
import Partners from '../Partners';


function App() {
  return (
    <div className="App">
     <Router>
       <div className='google'>
       <Login />
       </div>
     <Nav />
     <Switch>
       <Route path="/homepage" component={Homepage}>
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