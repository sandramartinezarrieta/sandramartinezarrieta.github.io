const productcar = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let Arraycar =[];

function carsproductlist(Array){
    let htmlContentToAppend = "";
    for(let i = 0; i < Array.products.length; i++){
        let Styleproduct = Array.products[i];
        htmlContentToAppend +=
        `
        <div class="list-group-item list-group-item-action >
              <div class="row">
                    <div class="col-3">
                     <img src=`+Styleproduct.image+` alt="${Styleproduct.description}" class="img-thumbnail">
                     </div>
                     <div class="col">
                       <div class="d-flex w-100 justify-content-between">
                             <h4 class="mb-1">${Styleproduct.name}</h4>
                             <small class="text-muted">${Styleproduct.productCount} artículos</small>
                         </div>
                         <p class="mb-1">${Styleproduct.description}</p>
                    </div>
                </div>
             </div> 
         `
         
        }
    document.getElementById('cat-list-container').innerHTML= htmlContentToAppend;
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

