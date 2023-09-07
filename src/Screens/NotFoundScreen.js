import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {

  return (
    <div className='full-height flex flex-column flex-center'>
      <h1 className='title-404'>404</h1>
      <p className='paragraph-404'>Page not Found</p>
      <Link to='/' className='button button-purple button-medium'>
        Page not Found
      </Link>
    </div>
  );
};

export default NotFoundScreen;