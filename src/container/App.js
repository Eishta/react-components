import React, { useState } from 'react';
import Navbar from '../components/Navbar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import routeData from './routeData'

const App = () => {
    let [sidebarIsOpen, toggleSidebar] = useState(true);
    return (
        <Router>
            <Navbar routes={routeData.topNav} sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
            <div className='container' style={{ height: '100vh', display: 'flex' }}>
                <Sidebar routes={routeData.sidebar} sidebarIsOpen={sidebarIsOpen} />

                <div style={{ flexBasis: sidebarIsOpen ? '75%' : '95%', padding: '1rem' }}>
                    <Switch>
                        {
                            routeData.topNav.map(route =>
                                <Route path={route.path}
                                    exact
                                    component={route.component}
                                    key={`topNav-${route.title}`}
                                />)
                        }
                        {
                            routeData.sidebar.map(route =>
                                <Route path={route.path}
                                    exact
                                    component={route.component}
                                    key={`topNav-${route.title}`}
                                />)
                        }
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;