import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './style.css'

const Header = (props) => {
    return(
        <header className= 'header'>
            <div style= {{display: 'flex'}}>
                <div className= 'logo'>Chatter</div>
                <ul className= 'leftMenu'>
                    <li><NavLink to= {'/login'}>Login</NavLink></li>
                    <li><NavLink to= {'/signup'}>Sign Up</NavLink></li>
                </ul>
            </div>
            <div style= {{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
                Hello Dan!
            </div>
            <ul className= 'menu'>
                <li>
                    <Link to= {'#'} onClick= {props.logout}>Logout</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;