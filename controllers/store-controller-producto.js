import { storeProducto } from "../service/store-productos.js";
import { formatPrice } from "../formatterPrices.js";

const contenedorStar = document.querySelector('#star-wars');
const contenedorConsolas = document.querySelector('#consolas');
const contenedorDiversos = document.querySelector('#diversos');

function nuevoProducto(id, nombre, precio, imagen, categoria) {
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
    .then(async respuesta => {
        try {
            await respuesta.forEach(({ id, nombre, precio, imagen, categoria}) => {
                const nuevaLinea = nuevoProducto(id, nombre, precio, imagen, categoria);
                switch (categoria) {
                    case 'star':              
                        contenedorStar.appendChild(nuevaLinea);
                        break;
                    case 'consolas':
                        contenedorConsolas.appendChild(nuevaLinea);
                        break;
                    case 'diversos':
                        contenedorDiversos.appendChild(nuevaLinea);
                    default:
                        categoria = '';
                        break;
                }
            })
        } catch (error) {
            console.log(error)
        }
    })


