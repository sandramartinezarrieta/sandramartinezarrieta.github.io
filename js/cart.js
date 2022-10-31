
let URL = ""
URL = CART_INFO_URL + "25801" + EXT_TYPE
let cantidad = document.getElementById("cant")
const costo = document.getElementById("cost")
let subtotal= document.getElementById("subtotal")
let image = document.getElementById("image")
let valorDatoCosto=0;
let valorCosto=0;
// funcion para cargar los datos al cart
async function carga(url){
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const datos=data.articles
            const nombre= document.getElementById("name")
            nombre.innerHTML= datos[0].name
            valorCosto += datos[0].unitCost
            costo.innerHTML= datos[0].unitCost
            cantidad.value = datos[0].count
            console.log(datos[0]);
            subtotal.innerHTML= datos[0].currency +" "+ 1*valorCosto
            console.log(valorCosto)
            image.innerHTML= `<img  src="${datos[0].image}" alt="" class="col-12 w-10">`
        })
return valorDatoCosto += valorCosto
     
}

console.log(valorDatoCosto)

// funcion para cargar el fetch al cart cuando se carga el DOM
document.addEventListener("DOMContentLoaded", function cargahtml() {
  carga(URL);
    console.log(valorDatoCosto)
    // funcion para cambiar en tiempo real el valor del subtotal
    cantidad.addEventListener("change", function (e) {
        e.preventDefault
    subtotal.innerHTML=cantidad.value*15200
    console.log(cantidad.value)
    })
    
}

)

