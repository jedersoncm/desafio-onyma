import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import data from '../helpers/data';
import ContextApp from '../context/ContextApp';
import Card from './Card';

function Body() {
  const { clinics, setClinics } = useContext(ContextApp);
  const [sorted, setSorted] = useState(false);
  const history = useHistory();

  const sortClinics = () => {
    const sortedArray = clinics.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    setSorted(true);
    setClinics(sortedArray);
    console.log(clinics);
  }

  useEffect(() => {
    if ( clinics.length === 0) {
      setClinics(data);
    }
  }, []);

  return (
    <div className="body-container">
      <div className="buttons-container">
        <button type="button" onClick={ sortClinics }>Ordenar</button>
        <button type="button" onClick={ () => history.push('/form')}>Adicionar clinica</button>
      </div>
      {sorted ? clinics.map((clinic) => (
        <Card info={ clinic } />
      )) : clinics.map((clinic) => (
        <Card info={ clinic } />
      )).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}
    </div>
  )
}

export default Body;
