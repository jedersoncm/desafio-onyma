import React from 'react';

function Services(props) {
  const { info } = props;
  return (
    <div className="services-container">
      <span
        className="service"
        style={info.services.includes('Clínicos') ? { backgroundColor: 'chartreuse' } : { backgroundColor: 'white' }}
      >
        EXAME CLÍNICO
      </span>
      <span
        className="service"
        style={info.services.includes('Complementares') ? { backgroundColor: 'chartreuse' } : { backgroundColor: 'white' }}
      >
        COMPLEMENTAR
      </span>
      <span
        className="service"
        style={info.services.includes('PCMSO') ? { backgroundColor: 'chartreuse' } : { backgroundColor: 'white' }}
      >
        PCMSO
      </span>
      <span
        className="service"
        style={info.services.includes('PPRA') ? { backgroundColor: 'chartreuse' } : { backgroundColor: 'white' }}
      >
        PPRA
      </span>
  </div>
  );
}

export default Services;
