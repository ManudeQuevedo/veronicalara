export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Por favor ingresa tu nombre";
  }
  
  if (!values.phone) {
    errors.phone = "Por favor ingresa tu número telefónico";
  } 
  
  if (!values.email) {
    errors.email = "Por favor ingresa tu correo electrónico";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Dirección de correo inválida";
  } 
  
  if (!values.message) {
    errors.message = "Por favor ingresa tus dudas o preguntas";
  }
  return errors;
}
