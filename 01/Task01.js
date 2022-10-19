import React from 'react';
import Home from './../src/components/Home'
import Contact from './../src/components/Contact'
import {Link, NavLink, Route} from 'react-router-dom'

const Task01 = () => {
    return (
        <div>
            <h1>Task01</h1>
            <ul>
                <li>
                    <NavLink 
                        to='/task01/home'
                        activeStyle={{border: '1px solid red'}}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/task01/contact'
                        activeStyle={{border: '1px solid red'}}
                    >Contact</NavLink>
                </li>
            </ul>
            <hr />
            {/* Home will have object of Route */}
            <Route path='/task01/home' component={Home} />

            {/* <Route path='/task01/contact' component={Contact} /> */}
            <Route path='/task01/contact'>
                <Contact />
            </Route>
        </div>
    );
}

export default Task01;

