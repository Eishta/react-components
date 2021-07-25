import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';


const rightPanel = {
    marginLeft: "35%"
};

const App = () => {
    return (
    <Router>
        <Navbar/>
        <div style={rightPanel}>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/contact'  component={Contact}/>
            <Route path='/about'  component={About}/>
        </Switch>
        </div>
        
    </Router>
    );
}

export default App;