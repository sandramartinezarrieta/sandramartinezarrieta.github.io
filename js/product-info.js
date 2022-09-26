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
       <div class="card-footer border-light mb-3 bg-transparent">
       <div><h3>Comentarios</h3>
              
                <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
     <br>
       </div>
       <div> <h3>Comentar</h3>
       <div class="mb-3">
       <label for="exampleFormControlTextarea1" class="form-label">Tu opinion</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
        <label for="exampleFormControlTextarea1" class="form-label">Tu puntuación</label>
        <div class="col-3">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Puntua</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="2">4</option>
          <option value="3">5</option>

        </select>
      </div>
       <br>
       <div class="col-12">
       <button class="btn btn-primary" type="submit">Enviar</button>
     </div>
       </div>
       
       
       </div>`
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

