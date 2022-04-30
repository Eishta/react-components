import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Form from '../components/Forms/dynamic_forms_using_json/Form';
import CustomForm from '../components/Forms/Hooks/useFormHook/Form';
import CustomInputForm from '../components/Forms/Hooks/useInputHook/Form'
const rightPanel = {
    marginLeft: "35%"
};

const App = () => {
    return (
    <Router>
        {/* <Navbar/> */}
        {/* <Form/> */}
        {/* <CustomForm/> */}
        <CustomInputForm/>
        {/* <div style={rightPanel}>
     
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/contact'  component={Contact}/>
            <Route path='/about'  component={About}/>
        </Switch>
        </div> */}
        
    </Router>
    );
}

export default App;