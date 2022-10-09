import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>
        Podana strona nie istnieje, wróć do <Link to='/'>strony głównej</Link>
      </p>
    </>
  );
};

export default NotFound;
