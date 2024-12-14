import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
    return (
        <>
            <h1>Task01</h1>
            <ul
                style={{
                    display: 'flex',
                    gap: '30px',
                    listStyleType: 'none',
                    padding: 0,
                }}
            >
                <li style={{ marginRight: '10px' }}>
                    <NavLink
                        style={{ padding: '10px', textDecoration: 'none' }}
                        to="/task01/home"
                        activeStyle={{ backgroundColor: 'lightblue' }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={{ padding: '10px', textDecoration: 'none' }}
                        to="/task01/contact"
                        activeStyle={{ backgroundColor: 'lightblue' }}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>

            <Route path="/task01/home" component={Home} />
            <Route path="/task01/contact" component={Contact} />
        </>
    );
};

export default Task01;