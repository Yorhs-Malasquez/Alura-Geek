import {storeUsuarios} from "../service/store-usuarios.js";

const formulario = document.querySelector('[data-form]');
const inputEmailRegistro = document.querySelector('#email-registro');
const inputPasswordRegistro = document.querySelector('#password-registro');
const inputPasswordRegistro2 = document.querySelector('#password-registro2');
const btnEnviarRegistro = document.querySelector('#enviar-registro');

document.addEventListener('DOMContentLoaded', () => {

    // btnLogin.classList.add('btn-desactivado');
    // btnLogin.disabled = true;
    // inputEmail.addEventListener('blur', validarForm);
    // inputPassword.addEventListener('blur', validarForm);
    formulario.addEventListener('submit', crearCliente);
    console.log('load');
})

async function crearCliente(e) {
    console.log('creando');
    e.preventDefault();
    let existeCorreo;

    await storeUsuarios.listaUsuarios()
        .then(respuesta => {
            respuesta.forEach(({ correo }) => {
                if (correo === inputEmailRegistro.value) {
                    return existeCorreo = true;
                }
            });
        })
        .catch(error => console.log(error));

    if (!existeCorreo) {
        if (inputPasswordRegistro.value === inputPasswordRegistro2.value) {

            console.log('Cuenta creada correctamente. Redireccionando...', 'succes')

            setTimeout(() => {
                storeUsuarios.crearUsuario(inputEmailRegistro.value, inputPasswordRegistro.value)
                    .then(respuesta => {
                        window.location.href = "/login.html";
                        console.log('redireccionando')
                    })
                    .catch(error => console.log(error))
            }, 3000);

        } else {
            console.log('Las contraseñas no son iguales', 'error');
        }
    } else {
        console.log('Correo ya registrado', 'error');
    }
}
