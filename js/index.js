document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autos").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    if (localStorage.getItem("user") == undefined) {
        document.getElementById("login2").innerHTML = "Ingresar";
    }
    else {
        document.getElementById("login").innerHTML = localStorage.getItem("user");
        document.getElementById("login2").innerHTML="" ;
    };
    document.getElementById("cerrar").addEventListener("click", function () {
        if (document.getElementById("login2").innerHTML !== undefined) {
            document.getElementById("login2").innerHTML = "Ingresar";
            localStorage.removeItem("user");
            localStorage.removeItem("name");
            localStorage.removeItem("lastname");
            localStorage.removeItem("cellphone");
            window.location = "login.html"
        }

    });
    document.getElementById("myProfile").addEventListener("click", function () {
        if (document.getElementById("login2").innerHTML == "") {
            window.location = "my-profile.html"       
        }
        else {
            window.location = "login.html"
        }

    });
    
});