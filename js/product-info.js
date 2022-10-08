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
      
     `
  document.getElementById('info-container').innerHTML = htmlContentToAppend;
}

//funcion para comentar
function carsproduccoment(Arraycomment) {
  let htmlContentToAppend = "";
  let htmlContentToAppend2 = "";
  let htmlContentToAppend3 = "";
  console.log(Arraycomment);
  //seccion comentarios
  htmlContentToAppend +=
    `
     <div class="card-footer border-light mb-3 bg-transparent">
     <div><h3>Comentarios</h3>
          `


  //ingreso de cada comentario del api
  for (let i = 0; i < Arraycomment.length; i++) {
    let comment = Arraycomment[i];
    //if para puntuar cada comentario
    if (comment.score == "") {
      comment.score = "provando el if";
    }
    else if (comment.score == "1") {
      comment.score = `<span class="fa fa-star checked"></span>
                        <span class="fa fa-star" ></span>
                        <span class="fa fa-star" ></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>`
    }
    else if (comment.score == "3") {
      comment.score = `<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>`
    }
    else if (comment.score == "3") {
      comment.score = `<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>`
    }
    else if (comment.score == "4") {
      comment.score = `<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>`
    }

    else if (comment.score == "5") {
      comment.score = `<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>`
    }
    //apend del comentario
    htmlContentToAppend2 +=
      `            
              
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><div class="card w-100">
                        
            <h6 class="card-title"><strong>${comment.user}</strong> &nbsp; 
            ${comment.dateTime} &nbsp; 
            ${comment.score}
            </h6>
            <p class="card-text">${comment.description}</p>
           
          </li>
         </ul>
          
          
        `


  }

  // ingreso del comentario individual 
  htmlContentToAppend3 =
    `<br>
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

  let seccioncoment = htmlContentToAppend;
  let everycoment = htmlContentToAppend2;
  let comentinsert = htmlContentToAppend3;
  document.getElementById('info-comment').innerHTML = seccioncoment + everycoment + comentinsert;
}






document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_URL + localStorage.prod + EXT_TYPE)
    .then(function (resultObj) {
      if (resultObj.status === "ok") {

        Arrayproductos = resultObj.data
        carsproductinfo(Arrayproductos)
        console.log(Arrayproductos)
      }
    })
  getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.prod + EXT_TYPE)
    .then(function (resultObj) {
      if (resultObj.status === "ok") {

        let Arraycomment = resultObj.data
        carsproduccoment(Arraycomment)
        console.log(Arraycomment)
      }

    })
  getJSONData(PRODUCTS_URL + localStorage.catID + EXT_TYPE)
    .then(function (resultObj) {
      if (resultObj.status === "ok") {

        let listacart = resultObj.data
        console.log(listacart)
        productrelativ(listacart)
        console.log(listacart)
      }

    })
})

// funcion para abrir la ventana del producto al dar click sobre el carrusel
function setProdID(id) {
  localStorage.setItem("prod", id);
  window.location = "product-info.html"
}



// funcion de carga para ingresar el carrusel de fotos
function productrelativ(listacart) {
  let htmlAppend1 = "";
  let htmlAppend2 = "";


  let Arraylistacart = listacart.products
  console.log(Arraylistacart)


  // ingreso del for en cada imagen y cada boton en las variables 
  for (let i = 0; i < Arraylistacart.length; i++) {
    let category = Arraylistacart[i];
    console.log(category);
    console.log(i)
    // if para la generacion del primer slide activo aparte
    if (i === 0) {
      htmlAppend1 += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
      htmlAppend2 += `<div class="carousel-item active" onclick="setProdID(${category.id})"data-bs-interval="10000">
  <img src="${category.image}" class="d-block w-100" alt="${category.name}">
  <div class="carousel-caption  d-md-block" onclick="setProdID(${category.id})">
  <h5 class="text-white" style="background-color: #0e073e8f;font-weight: 550;">${category.name}</h5>
    <p class="text-white" style="background-color: #0e073e8f;">${category.description}</p>
  </div>
</div>`
    } else if(i == Arraylistacart.length-1){ 
      htmlAppend1 += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide 0"></button>`
    htmlAppend2 += `<div class="carousel-item" onclick="setProdID(${category.id})"data-bs-interval="2000">
<img src="${category.image}" class="d-block w-100" alt="${category.name}">
<div class="carousel-caption  d-md-block" onclick="setProdID(${category.id})">
  <h5 class="text-white" style="background-color: #0e073e8f;font-weight: 550;">${category.name}</h5>
  <p class="text-white" style="background-color: #0e073e8f;">${category.description}</p>
</div>
</div>`
}
    else{

      htmlAppend1 += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide ${i += 1}"></button>`
      htmlAppend2 += `<div class="carousel-item" onclick="setProdID(${category.id})"data-bs-interval="2000">
  <img src="${category.image}" class="d-block w-100" alt="${category.name}">
  <div class="carousel-caption  d-md-block" onclick="setProdID(${category.id})">
    <h5 class="text-white" style="background-color: #0e073e8f;font-weight: 550;">${category.name}</h5>
    <p class="text-white" style="background-color: #0e073e8f;">${category.description}</p>
  </div>
</div>`

    }


  }
  console.log(htmlAppend1);
  console.log(htmlAppend2);
  document.getElementById("info-carrusel").innerHTML += htmlAppend1
  document.getElementById("info-carrusel2").innerHTML += htmlAppend2

}





