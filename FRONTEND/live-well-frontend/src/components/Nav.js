import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <NavLink exact to='/homepage'>Home Page</NavLink>
            <br />
            <NavLink exact to='/about'>About</NavLink>
            <br />
            <NavLink exact to='/ourimpact'>Our Impact</NavLink>
            <br />
            <NavLink exact to='/partners'>Partners</NavLink>
            <br />
        </nav>
    )
}
export default Nav