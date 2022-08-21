const productcar = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let Arraycar =[];

function carsproductlist(Array){
    let htmlContentToAppend = "";
    for(let i = 0; i < Array.products.length; i++){
        let Styleproduct = Array.products[i];
        htmlContentToAppend +=
        `
        <div class="containertext-center " >
              <div class="row">
                    <div class="col-sm-3">
                     <img src=`+Styleproduct.image+` alt="imagen del producto" class="img-thumbnail">
                     </div>
                     <div class="col-sm-6">
                       <div class="d-flex w-100 justify-content-between">
                             <h4 class="mb-1">${Styleproduct.name} </h4>
                             <small class="text-muted">${Styleproduct.soldCount} artículos</small>
                         </div>
                         <p class="mb-1">${Styleproduct.description}</p>
                    </div>
                </div>
             </div> 
         `
         
        }
    document.getElementById('list-container').innerHTML= htmlContentToAppend;
    document.getElementById('name-to-change') = Array.catName;
}

document.addEventListener("DOMContentLoaded",function(e){
    getJSONData(productcar)
    .then (function (resultObj){
        if (resultObj.status==="ok"){
            Arraycar = resultObj.data; 
            carsproductlist(Arraycar)
        }
    })
})

