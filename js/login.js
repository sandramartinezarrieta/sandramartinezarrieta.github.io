
var Validacion = document.getElementById("validacion");


Validacion.addEventListener("click", function(){
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;

    if ( (email) && (password1)){
        showAlertSuccess();
    } else {
        showAlertError();  
    }

}
);

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    window.setTimeout((window.location = "index.html"), 60000)
    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


        

