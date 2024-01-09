import React from 'react';
import { useRouteError } from 'react-router-dom';


const Error = () => {
    const {data} = useRouteError()
    // console.log(err)
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <h1 className='text-6xl text-red-500'>{data}</h1>
    </div>
  );
};

export default Error;
