let producto = "https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch (producto)
.then((resp) => resp.json())
.then((data) =>{
    let htmlContentToAppend = "";
    let Array = producto[2];
    for(let i = 0; i < Array.length; i++){
        let styleproduct = Array[i]
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active"`+ styleproduct.id +`>
                <div class="row">
                    <div class="col-3">
                        <img src="${styleproduct.imgSrc}" alt="${styleproduct.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${styleproduct.name}</h4>
                            <small class="text-muted">${styleproduct.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${styleproduct.description}</p>
                    </div>
                </div>
            </div> 
            `
    }
    document.getElementById("cat-list-container").innerHTML= htmlContentToAppend;
})


document.getElementById("name-to-change").textContent = "Autos"