
let URL = ""
URL = CART_INFO_URL + "25801" + EXT_TYPE
let cantidad = document.getElementById("cant")
const costo = document.getElementById("cost")
let subtotal= document.getElementById("subtotal")
let valorDatoCosto=0;
// funcion para cargar los datos al cart
function carga() {
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const datos=data.articles
            const nombre= document.getElementById("name")
            nombre.innerHTML= datos[0].name
            valorDatoCosto += datos[0].unitCost
            costo.innerHTML= datos[0].unitCost
            cantidad.value = datos[0].count
            console.log(valorDatoCosto);
            subtotal.innerHTML= 1*valorDatoCosto

        })
        
}

console.log(cantidad.value)

document.addEventListener("DOMContentLoaded", function cargahtml() {
    carga();
    cantidad.addEventListener("change", function (e) {
        e.preventDefault
    subtotal.innerHTML=e.value*15200
    })
    
    // console.log(costo)
    // console.log(subtotal)
    
}

)

console.log(valorDatoCosto)