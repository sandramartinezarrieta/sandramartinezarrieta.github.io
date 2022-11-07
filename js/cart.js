let URL = "";
URL = CART_INFO_URL + "25801" + EXT_TYPE;
let cardHtml = document.getElementById("cardHtml");
let subtotal = "";
let sub = document.getElementById("sub");
let envioHtml = document.getElementById("envio");
let total = document.getElementById("total");
let premium = document.getElementById("premium");
let express = document.getElementById("express");
let standard = document.getElementById("standard");
let calle = document.getElementById("calle");
let esquina = document.getElementById("esquina");
let numero = document.getElementById("numero");
let costo = 0;
let valorCosto = 0;
// funcion para cargar los  al cart
async function carga(url) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const datos = data.articles;
      htmlContent(datos);
      });
    return subtotal
}

// Funcion para dibujar los datos en el HTML
function htmlContent(articles) {
  valorCosto += articles[0].unitCost;
  subtotal = articles[0].count * valorCosto;

  cardHtml.innerHTML = `
    <div class="card-body text-success d-flex flex-row">

          <div class="d-flex  mx-0 col-2" id="image">
          <img  src="${articles[0].image}" alt="" class="col-12 w-10">
          </div>
          <div class="d-flex  mx-2 col-2">
            <p id="name">${articles[0].name}</p>
          </div>
          <div class="d-flex  mx-2 col-2">
            <p id="cost">${articles[0].unitCost}</p>
          </div>
          <div class="d-flex  mx-2 col-2">
            <div class="m-auto">
              <label for="cant" value="" class="visually-hidden">Password</label>
              <input type="number" min="0" class="form-control" id="cant" placeholder="Cant" value="${articles[0].count}">
            </div>
          </div>
          <div class="d-flex  mx-2 col-4">
            <p id="subtotal">${articles[0].currency} ${subtotal} </p>
          </div>
        </div>
    `;
}

// funcion para calcular el costo de envio
function envio(costo) {
    console.log(costo)
    let costoenvio = 0;
    if (premium.checked){
        costoenvio = (costo*15)/100
        }
    else if(express.checked){
        costoenvio =  (costo*7)/100
    }
    else if(standard.checked){
        costoenvio =  (costo*5)/100
    }
    else if(costo==undefined){
        alert("SELECCIONAR CANTIDAD DE PRODUCTOS")
    }
    else {
        alert("NO HA SELECCIONADO NINGUN TIPO DE ENVIO")
    }
    envioHtml.innerHTML= "USD " + costoenvio
    return costoenvio
}

// funcion finalizar compra
function finalizarCompra() {
   

    if(calle.value==""|| esquina.value=="" || numero.value==""){
alert("POR FAVOR RELLENE LOS CAMPOS CALLE, ESQUINA Y NUMERO")
calle.classList+= text-bg-danger;
esquina.classList+= text-bg-danger;
numero.classList+= text-bg-danger;
    }
    
}


// funcion para cargar el fetch al cart cuando se carga el DOM
document.addEventListener("DOMContentLoaded", async function cargahtml() {
  await carga(URL);
  let valorHTML = "USD " + subtotal;
  sub.innerHTML = valorHTML;
  total.innerHTML = valorHTML;
  console.log(subtotal)
  console.log(envio(subtotal))
  

  // funcion para cambiar en tiempo real el valor del subtotal
  let cantidad = document.getElementById("cant");
  cantidad.addEventListener("change", function (e) {
    e.preventDefault;
    valorHTML = cantidad.value * valorCosto;
    console.log(valorHTML)
    document.getElementById("subtotal").innerHTML = valorHTML;
    sub.innerHTML = "USD " + valorHTML;
    envio(valorHTML)
    total.innerHTML = "USD " + (valorHTML + envio(valorHTML))
  });
});
