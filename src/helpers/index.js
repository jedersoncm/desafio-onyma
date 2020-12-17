export const validateForm = (obj) => {
  if (obj.name === '' || obj.address === ''
    || obj.cep === '' || obj.whatsapp === '' || obj.services === '') {
      return false;
  }
  return true;
}

export const pesquisaCep = async (cep) => {
  const cepNumber = cep.replace(/\D/g, '');
  const validaCep = /^[0-9]{8}$/;
  const init = { 
    method: "GET",
    mode: 'cors',
    cache: 'default'
  }
  
  if (validaCep.test(cepNumber)) {
    const apiRequest = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`, init);
    const apiResponse = await apiRequest.json();
    return (apiResponse.logradouro);
  }

  return "";
}

