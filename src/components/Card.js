import React from 'react';
import whatsappLogo from '../images/whatsappLogo.png'
import '../styles/card.css'

function Card(props) {
  const { info } = props;
  console.log(info);
  return (
    <div className="card-container">
      <div className="infos-container">
        <h3>{info.name}</h3>
        <p>{info.address}</p>
        <p>{info.email}</p>
      </div>
      <div className="right-container">
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
        <div className="contact-container">
          <img src={ whatsappLogo } alt="logo whatsapp" className="whats-logo"/>
          <p>{info.whatsapp}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
