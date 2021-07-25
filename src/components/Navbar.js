import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

let list1 = [{
    id: 'navlink1',
    link: '/',
    text: 'Home'
},
{
    id: 'navlink2',
    link: '/contact',
    text: 'Contact'
},
{
    id: 'navlink2',
    link: '/about',
    text: 'About'
},]

const Navbar = (props) => {
    // const { list } = props;
    return (<nav className='nav-container'>
        {list1.map(item => <NavLink  to={item.link} className='nav-item'>{item.text} </NavLink>)}
    </nav>)
}

export default Navbar;