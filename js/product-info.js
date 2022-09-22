let Arrayproductos = [];

function carsproductinfo(Array) {
    let htmlContentToAppend = "";
    if (localStorage.prod != undefined) {
        i = Array.indexOf(localStorage.prod);
    }
    let productinfo = Array[i];
    htmlContentToAppend +=
       `<div> <h4> <strong> mama</strong>  </h4>
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