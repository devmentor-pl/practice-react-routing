import React from 'react';
import { Switch, Route, useParams, NavLink } from 'react-router-dom';

const data = [
    {
        id: 1,
        title: 'Nothing new',
        desc: 'Lalalal...'
    },
    {
        id: 2,
        title: 'Something new',
        desc: 'La...'
    }
]

const Article = () => {
    const { id, alias } = useParams();
    return (
        <p>id={ id }</p>
    )
}


const Task02 = () => {
    const style = { color: 'tomato' };
    const nav = data.map(el => {
        return (
            <li key={ el.id }>
                <NavLink
                    activeStyle={ style }
                    to={ `/task02/${ el.id }` }
                    cl
                >
                    { el.title } - { el.desc }
                </NavLink>
            </li>
            );
        }
    );
    return (
        <>
            <h1>Task02</h1>
            <ul>
                { nav }
            </ul>
            <Switch>
                <Route path="/task02/:id">
                    <Article />
                </Route>
            </Switch>
        </>
    );
}

export default Task02;

