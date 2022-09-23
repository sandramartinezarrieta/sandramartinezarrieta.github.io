let Arrayproductos = [];

function carsproductinfo(Array) {
    let htmlContentToAppend = "";
    images = Array.images
    
    htmlContentToAppend +=
        `<div> <div class="card border-light mb-3" style="max-width: 50rem;">
       <div class="card-header bg-transparent "> <h1>${Array.name}<h1/></div>
       <div class="card-body ">
         <h5 class="card-title"><strong>Precio</strong></h5>
         <p class="card-text">${Array.cost}</p>
         <h5 class="card-title"><strong>Descripcion</strong></h5>
         <p class="card-text">${Array.description}</p>
         <h5 class="card-title"><strong>Categoria</strong></h5>
         <p class="card-text">${Array.category}</p>
         <h5 class="card-title"><strong>Cantidad de vendidos</strong></h5>
         <p class="card-text">${Array.soldCount}</p>
         <h5 class="card-title"><strong>Imagenes ilustradas</strong></h5>
         <p class="card-text">
         <div class="card-group">
            <div class="card mx-2">
         <img src= "${Array.images[0]}" class="img-thumbnail" alt="imagendeoso" >
         </div>
         <div class="card mx-2"> 
         <img src="${images[1]}" class="img-thumbnail" alt="imagendeoso">
         </div>
         <div class="card mx-2">
         <img src="${images[2]}" class="img-thumbnail" alt="imagendeoso">
         </div>
         <div class="card mx-2">
         <img src="${images[3]}" class="img-thumbnail" alt="imagendeoso">
         </div>
         </div>
         </p>
         <p></p>
         </div>
       <div class="card-footer border-light mb-3 bg-transparent">Comentarios</div>
       <div>
       
       <div class="form-check form-check-inline">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                
     </div>
     <div class="form-check form-check-inline">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
       <label class="form-check-label" for="inlineCheckbox2">2</label>
     </div>
     <div class="form-check form-check-inline">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
       <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
     </div>
             </div>   
       </div>
     </div>
       </div> 
       <div></div>`
    document.getElementById('info-container').innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL + localStorage.prod + EXT_TYPE)
        .then(function (resultObj) {
            if (resultObj.status === "ok") {

                Arrayproductos = resultObj.data
                carsproductinfo(Arrayproductos)
            }
        })
})