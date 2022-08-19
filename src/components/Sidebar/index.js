import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';

const Sidebar = ({ routes, sidebarIsOpen }) => {
    return (
        <div className={sidebarIsOpen ? 'sidebar' : 'sidebar close'}>
            <span className='icon'>
                EM
            </span>
            <div className='components-nav'>
                {routes.map(item => {
                    return <NavLink className='sidebar-links' activeStyle={{color: 'teal'}}  to={item.path}>{item.title}</NavLink>
                })}
            </div>
        </div>
    )
}

export default Sidebar