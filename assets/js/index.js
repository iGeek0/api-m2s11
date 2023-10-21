console.log("Entro index.js");

let contenidoProductos = document.getElementById("contenidoProductos");

let loading = false;

fetch('https://dev4humans.com.mx/api/clases/productos', {method: "GET"})
    .then(response => response.json())
    .then(data => {
        renderizado(data);
    }).catch(error => console.log(error))



    function renderizado(data) {
        console.log("La promesa se reolvio");
        const rawData = data;
        const productos = rawData.data.products;
        console.log(productos);
        productos.forEach(producto => {
            // contenidoProductos.innerHTML += '<p>demo</p>';
            contenidoProductos.innerHTML = contenidoProductos.innerHTML + `
            <div class="col-md-12">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${producto.thumbnail}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.title} - $${producto.price}</h5>
                                <p class="card-text">${producto.description}</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    }