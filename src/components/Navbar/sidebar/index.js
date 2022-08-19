import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

const Navbar = ({ routes, sidebarIsOpen, toggleSidebar }) => {
    
    return (
        <header>
            <div className={sidebarIsOpen ? 'hamburger' : ' hamburger close'} onClick={() => toggleSidebar(prev => !prev)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav>
                <ul>
                    {routes.map(route => <NavLink activeStyle={{ color: 'teal' }} to={route.path}>{route.title}</NavLink>)}
                </ul>
            </nav>


        </header>
    )
}

export default Navbar