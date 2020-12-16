import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextApp from '../context/ContextApp';
import validateForm from '../helpers';
import '../styles/form.css'

function Form() {
  const { clinics, setClinics } = useContext(ContextApp);
  const [isDisable, setIsDisable] = useState(false);
  const [newData, setNewData] = useState({});
  const updatedClinics = clinics;
  const history = useHistory();

  const handleChange = () => {
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

    setIsDisable(validateForm(obj));
    setNewData(obj);
  }

  const handleClick = () => {
    updatedClinics.push(newData);
    setClinics(updatedClinics);
    history.push('/');
  }

  return (
    <div>
      <form>
        <div className="form-container">
          <div className="fild">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" onChange={ handleChange } />
          </div>
          <div className="fild">
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" onChange={ handleChange } />
          </div>
          <div className="fild">
            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" onChange={ handleChange } />
          </div>
          <div className="fild">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" onChange={ handleChange } />
          </div>
          <div className="fild">
            <label htmlFor="whatsapp">Whatsapp:</label>
            <input type="text" id="whatsapp" onChange={ handleChange } />
          </div>
          <p>Serviços disponiveis</p>
          <div className="services-group">
            <div>
              <input type="checkbox" id="clinic-input" onChange={ handleChange } />
              <label htmlFor="clinic-input">Exames Clínicos</label>
            </div>
            <div>
              <input type="checkbox" id="additional-input" onChange={ handleChange } />
              <label htmlFor="additional-input">Exames Complementares</label>
            </div>
            <div>
              <input type="checkbox" id="ppra-input" onChange={ handleChange } />
              <label htmlFor="ppra-input" >PPRA</label>
            </div>
            <div>
              <input type="checkbox" id="pcmso-input" onChange={ handleChange }/>
              <label htmlFor="pcmso-input">PCMSO</label>
            </div>
          </div>
          <button
            type="submit"
            onClick={ handleClick }
            disabled={ !isDisable }
            className="form-button"
          >
            Adicionar Clínica
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;