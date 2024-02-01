export const validationForm = (values) => {
    const regex = /^[a-zA-Z\s']+$/;
    if (values.name.length < 3) {
      alert('Nombre es muy corto');
      return false;
    }
    if (regex.test(values.name) && /\d/.test(values.name)) {
      alert('El nombre contiene numeros, solo se permite letras');
      return false;
    }
    if (values.name.trim() === '') {
      alert('Por favor, ingrese un nombre.');
      return false;
    }
    if (values.address.length < 3) {
      alert('Dirección es muy corta');
      return false;
    }
    if (regex.test(values.address) && /\d/.test(values.address)) {
      alert('La dirección contiene numeros, solo se permite letras');
      return false;
    }
    if (values.address.trim() === '') {
      alert('Por favor, ingrese una dirección.');
      return false;
    }
    return true;
  };