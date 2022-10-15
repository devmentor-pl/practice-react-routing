import React from 'react';
import {Route, NavLink} from 'react-router-dom'

import Home from '../src/components/Home'
import Contact from '../src/components/Contact'

const Task01 = () => {
    const activeStyle = { backgroundColor: '#bbb', borderRadius: '5px', }
    const activeClass = 'active'

    return (
        <>
            <h1>Task01</h1>
            <ul>
                <li>
                    <NavLink 
                        activeStyle={activeStyle}
                        to='/task01/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName={activeClass}
                        to='/task01/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <Route path='/task01/home' component={Home}/>
            <Route path='/task01/contact' component={Contact}/>
        </>
    );
}

export default Task01;
