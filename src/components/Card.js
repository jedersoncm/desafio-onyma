import React from 'react';
import whatsappLogo from '../images/whatsappLogo.png';
// import {onlyNumbers} from '../helpers'
import '../styles/card.css'
import Services from './Services';

function Card(props) {
  const { info } = props;
  const phoneNumber = info.whatsapp.replace(/([^\d])+/gim, '');
  const href = `https://api.whatsapp.com/send?phone=55${phoneNumber}`

  return (
    <div className="card-container">
      <div className="infos-container">
        <h3>{info.name}</h3>
        <p>{info.address}</p>
        <p>{info.email}</p>
      </div>
      <div className="right-container">
        <Services info={ info } />
        <a
          className="contact-container"
          href={ href }
        >
          <img src={ whatsappLogo } alt="logo whatsapp" className="whats-logo"/>
          <p>{info.whatsapp}</p>
        </a>
      </div>
    </div>
  )
}

export default Card;
