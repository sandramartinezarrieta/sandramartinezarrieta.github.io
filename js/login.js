
var Validacion = document.getElementById("validacion");


Validacion.addEventListener("click", function validar(){
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var contenedor = ""

    if ( (email) && (password1)){
        showAlertSuccess();
    } else {
            showAlertError();
            contenedor = "Ingrese sus datos"
     
          document.getElementById('blue').innerHTML = contenedor + " del Email"
          document.getElementById('red').innerHTML = contenedor + " de la contraseña"
    }
    localStorage.setItem("user", email);
    document.getElementById('login2').innerHTML = "ES UNA LOCURA";
});





function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    window.setTimeout((window.location = "index.html"), 60000)
    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("returnIn").addEventListener("click", ()=>{
    window.location = "index.html"
}) 

