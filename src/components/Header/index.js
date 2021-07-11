import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { logout } from '../../actions';

import './style.css'

const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return(
        <header className= 'header'>
            <div style= {{display: 'flex'}}>
                <div className= 'logo'>Chatter</div>

                {
                    !auth.authenticated ? 
                    <ul className= 'leftMenu'>
                    <li><NavLink to= {'/login'}>Login</NavLink></li>
                    <li><NavLink to= {'/signup'}>Sign Up</NavLink></li>
                </ul> : null
                }

            </div>
            <div style= {{margin: '20px 0', color: '#8D89A6', fontWeight: 'bold'}}>
                {auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ''}
            </div>
            <ul className= 'menu'>

                {/*Needs more explanation*/}
                {
                    auth.authenticated ?
                    <li>
                    <Link to= {'#'} onClick= {() => {
                        dispatch(logout(auth.uid))
                    }}>Logout</Link>
                </li> : null
                }
            </ul>
        </header>
    )
}

export default Header;