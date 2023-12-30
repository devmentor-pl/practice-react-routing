import React from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const data = [
    { name: 'home', component: Home },
    { name: 'contact', component: Contact },
];

const Task01 = () => {
    const nav = (
        <ul style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            {data.map(item => {
                const { name } = item;
                const toUrl = `/task01/${name}`;
                return (
                    <li key={name}>
                        <Link to={toUrl}>{name}</Link>
                    </li>
                );
            })}
        </ul>
    );

    const routes = data.map(item => {
        const { component, name } = item;
        const TagName = component;
        const path = `/task01/${name}`;

        return (
            <Route path={path} key={name}>
                <TagName />
            </Route>
        );
    });

    return (
        <>
            <h1>Task01</h1>
            {nav}
            {routes}
        </>
    );
};

export default Task01;
