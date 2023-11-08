const url = "https://6547e6cb902874dff3acdb53.mockapi.io/api/v1/usuarios";
const listaUsuarios = async () => {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        return datos;
    } catch (error) {
        console.error(error);
    }
};  

async function crearUsuario(correo, password) {
    console.log('fun crea');
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            correo: correo,
            password: password
        })
    })
}

export const storeUsuarios = {
    listaUsuarios,
    crearUsuario
};