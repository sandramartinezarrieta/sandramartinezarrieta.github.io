let Arrayproductos = [];

function carsproductinfo(Array) {
    let htmlContentToAppend = "";
    if (localStorage.prod != undefined) {
        i = Array.indexOf(localStorage.prod);
    }
    let productinfo = Array[i];
    htmlContentToAppend +=
       `<div> <div class="card border-light mb-3" style="max-width: 50rem;">
       <div class="card-header bg-transparent "> <h1>Nombre<h1/></div>
       <div class="card-body ">
         <h5 class="card-title"><strong>Precio</strong></h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <h5 class="card-title"><strong>Descripcion</strong></h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <h5 class="card-title"><strong>Categoria</strong></h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <h5 class="card-title"><strong>Cantidad de vendidos</strong></h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <h5 class="card-title"><strong>Imagenes ilustradas</strong></h5>
         <p class="card-text">
         <img src= "" class="img-thumbnail" alt="...">
         <img src="..." class="img-thumbnail" alt="...">
         <img src="..." class="img-thumbnail" alt="...">
         <img src="..." class="img-thumbnail" alt="...">
         </p>
         <p></p>
         </div>
       <div class="card-footer border-light mb-3 bg-transparent">Footer</div>
     </div>
       </div> 
       <div></div>`          
    document.getElementById('info-container').innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL + localStorage.catID + EXT_TYPE)
        .then(function (resultObj) {
            if (resultObj.status === "ok") {

                Arrayproductos = resultObj.data.products
                carsproductinfo(Arrayproductos)
            }
        })
})