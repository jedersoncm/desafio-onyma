import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextApp from './ContextApp';

function Provider({ children }) {
  const [clinics, setClinics] = useState([]);

  const contextValue = {
    clinics,
    setClinics,
  };

  return (
    <ContextApp.Provider value={ contextValue }>
      {children}
    </ContextApp.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

