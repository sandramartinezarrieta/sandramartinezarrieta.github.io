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
            window.location = "login.html"
        }

    });
});