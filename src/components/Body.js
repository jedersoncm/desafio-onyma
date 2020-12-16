import React, { useEffect, useContext } from 'react';
import data from '../helpers/data';
import ContextApp from '../context/ContextApp';
import Card from './Card';

function Body() {
  const { clinics, setClinics } = useContext(ContextApp);

  useEffect(() => {
    // if ( clinics.length === 0) {
      setClinics(data);
    // }
  }, []);

  return (
    <div>
      {clinics.map((clinic) => (
        <Card info={ clinic } />
      ))}
    </div>
  )
}

export default Body;
