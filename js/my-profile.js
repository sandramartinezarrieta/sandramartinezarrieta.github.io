let named = document.getElementById("firtsName");
let lastname = document.getElementById("lastName");
let cellphone = document.getElementById("phoneNumber");
let submit = document.getElementById("changes");
let email = document.getElementById("correo");
let formData = document.getElementById("formData");
let validationState = true;

document.addEventListener("DOMContentLoaded", function () {

  localStorage.getItem("name")!== undefined? named.value= localStorage.getItem("name"):console.log("estuvo por aca")
  localStorage.getItem("lastname")!== undefined? lastname.value= localStorage.getItem("lastname"):console.log("entro a la funcion lastname")
  localStorage.getItem("cellphone")!== undefined? cellphone.value= localStorage.getItem("cellphone"):console.log("entro a la funcion cellphone")

  // Funcion para subir los datos correctamente
  submit.addEventListener("click", function (event) {
    
    event.preventDefault;
    !validation()? event.stopPropagation:document.body.classList.add('was-validated');
    localStorage.setItem("name", named.value)
    localStorage.setItem("lastname", lastname.value)
    localStorage.setItem("cellphone", cellphone.value)
    console.log(localStorage.getItem("name"))
  });
 
  email.value = localStorage.getItem("user");
});


//Funcion para la validacion de los input principales
async function validation() {
  (await named.checkValidity())
    ? named.classList.add('was-validated')
    : (validationState = false);
  (await lastname.checkValidity())
    ? lastname.classList.add('was-validated')
    : (validationState = false);
  (await cellphone.checkValidity())
    ? cellphone.classList.add('was-validated')
    : (validationState = false);
  console.log(validationState);

  return validationState
}


