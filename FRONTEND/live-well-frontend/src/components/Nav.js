import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <div className='nav'>
             <br />
             <h1>Water For All</h1>
        <ul>
            <li><NavLink exact to='/homepage'>Home Page</NavLink></li>
            <br />
            <br />
            <li><NavLink exact to='/about'>About</NavLink></li>
            <br />
            <br />
            <li><NavLink exact to='/ourimpact'>Our Impact</NavLink></li>
            <br />
            <br />
            <li><NavLink exact to='/partners'>Partners</NavLink></li>
            <br />
            <br />
        </ul>
        </div>
    )
}
export default Nav