import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function NotFound({ redirectToHome = false }) {
    if (redirectToHome) {
        <Redirect to='/task01' />;
    }

    return (
        <>
            <h2>Oh no!</h2>
            <p>
                Looks like you wandered too far. You should head back <Link to='/task01'>Home</Link>.
            </p>
        </>
    );
}

export default NotFound;
