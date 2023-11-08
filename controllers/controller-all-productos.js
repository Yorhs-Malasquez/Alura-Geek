import { storeProducto } from "../service/store-productos.js";
import { formatPrice } from "../formatterPrices.js";

const contenedorTodoProductos = document.querySelector('#allProducts');

function mostrarTodo(id, nombre, precio, imagen, categoria) {
    const div = document.createElement('div');
    // div.classList.add('producto');
    const contenido = `
            <article class="producto-card">
                <img src="${imagen}" alt="img" class="producto-image">
                    <aside class="producto-card-info">
                        <div>
                            <h3 class="card-info-title"> ${nombre} </h3>
                            <p class="card-info-precio">${formatPrice(precio)}</p>
                            <a href="../producto.html?id=${id}" class="producto-enlace">Ver Produto</a>
                        </div>
                    </aside>
            </article>   
            `;
    div.innerHTML = contenido;
    return div;
}

storeProducto.listaProductos()
    .then(resultado => {

        resultado.forEach(({ id, nombre, precio, imagen, categoria }) => {
            const verTodo = mostrarTodo(id, nombre, precio, imagen, categoria);
            console.log('holaaa');
            contenedorTodoProductos.appendChild(verTodo);
        });
    })
    .catch(error => console.log(error));

