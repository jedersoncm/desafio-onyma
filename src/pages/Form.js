import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextApp from '../context/ContextApp';

function Form() {
  const { clinics, setClinics } = useContext(ContextApp);
  const updatedClinics = clinics;
  const history = useHistory();

  const handleClick = () => {
    const name = document.querySelector('#name').value;
    const address = document.querySelector('#address').value;
    const cep = document.querySelector('#cep').value;
    const email = document.querySelector('#email').value;
    const whatsapp = document.querySelector('#whatsapp').value;
    const inputClinic = document.querySelector('#clinic-input').checked ? "Exames Clínicos, " : "" ;
    const inputAdditional = document.querySelector('#additional-input').checked ? "Exames Complementares, " : "" ;
    const inputPpra = document.querySelector('#ppra-input').checked ?  "PPRA, " : "" ;
    const inputPcmso = document.querySelector('#pcmso-input').checked ?  "PCMSO" : "" ;
    const services = `${inputClinic}${inputAdditional}${inputPpra}${inputPcmso}`;

    const obj = {
      name,
      address,
      cep,
      email,
      whatsapp,
      services,
    };

    updatedClinics.push(obj);
    setClinics(updatedClinics);
    history.push('/');

  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome:
          <input type="text" id="name" />
        </label>
        <label htmlFor="cep">CEP:
          <input type="text" id="cep" />
        </label>
        <label htmlFor="address">Endereço:
          <input type="text" id="address" />
        </label>
        <label htmlFor="email">Email:
          <input type="text" id="email"  />
        </label>
        <label htmlFor="whatsapp">Whatsapp:
          <input type="text" id="whatsapp" />
        </label>
        <p>Serviços disponiveis</p>
        <input type="checkbox" id="clinic-input" />
        <label htmlFor="clinic-input">Exames Clínicos</label>
        <input type="checkbox" id="additional-input" />
        <label htmlFor="additional-input">Exames Complementares</label>
        <input type="checkbox" id="ppra-input"/>
        <label htmlFor="ppra-input">PPRA</label>
        <input type="checkbox" id="pcmso-input"/>
        <label htmlFor="pcmso-input">PCMSO</label>
        <button type="button" onClick={ handleClick }>Adicionar Clínica</button>
      </form>
    </div>
  )
}

export default Form;