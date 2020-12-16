const validateForm = (obj) => {
  if (obj.name === '' || obj.address === ''
    || obj.cep === '' || obj.whatsapp === '' || obj.services === '') {
      return false;
  }
  return true;
}

export default validateForm;





// const obj = {
//   name,
//   address,
//   cep,
//   email,
//   whatsapp,
//   services,
// };