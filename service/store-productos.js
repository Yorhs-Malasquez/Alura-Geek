// const listaProductos = () =>
//     fetch("http://localhost:3000/productos")
//         .then((response) => response.json())
//         .catch((error) => console.log(error));
//const url = "http://localhost:3000/productos";
const url = "https://6547e6cb902874dff3acdb53.mockapi.io/api/v1/productos";
const listaProductos = async () => {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        return datos;
    } catch (error) {
        console.error(error);
    }
   
};  

async function crearProducto(nombre, precio, imagen, categoria) {

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({//como string largo
            nombre,
            precio,
            imagen,
            categoria
        })
    })
}
export const storeProducto = {
    listaProductos,
    crearProducto
    //listarUnProduto
};