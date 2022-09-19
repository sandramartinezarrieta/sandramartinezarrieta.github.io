//onst productcar = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let Arraycar =[];
let Arrayproductos = [];

function carsproductlist(Array){
    let htmlContentToAppend = "";
    for(let i = 0; i < Array.length; i++){
        let Styleproduct = Array[i];
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
        document.getElementById('name-to-change').innerHTML = Array.catName;
        document.getElementById('list-container').innerHTML= htmlContentToAppend;
    
}

document.addEventListener("DOMContentLoaded",function(e){
    getJSONData(PRODUCTS_URL + localStorage.catID + EXT_TYPE)
    .then (function (resultObj){
        if (resultObj.status==="ok"){
            Arraycar = resultObj.data; 
            Arrayproductos = resultObj.data.products
            carsproductlist(Arrayproductos)
        }
    })
document.getElementById("sortAsc").addEventListener("click", ()=> {
    Arrayproductos = Arrayproductos.sort((a, b) => { return a.cost - b.cost})
    carsproductlist(Arrayproductos)
})

})

