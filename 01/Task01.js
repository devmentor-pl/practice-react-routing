import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home  from './../src/components/Home';
import Contact from './../src/components/Contact';


const Task01 = () => {
   
    return (
        <>
            <h1>Task01</h1>
            <Switch>
                <Route exact path='/task01/home'><Home/></Route>
                <Route exact path='/task01/contact'><Contact/></Route>
            </Switch>
        </>       
    );
}

export default Task01;

