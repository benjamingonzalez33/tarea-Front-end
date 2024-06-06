import { guardarVehiculo, obtenerVehiculos, eliminarVehiculo, obtenerVehiculo, editarVehiculo } from './firebase/firebase.js';
import { validaEmail, validaRun, validaPatente } from './utils/validations.js';
import { limpiarFormulario, soloNumeros } from './utils/helpers.js';

let idVehiculoEditar = null;

// Función para mostrar mensaje de error en el campo correspondiente
const mostrarError = (campo, mensaje) => {
    const divError = document.getElementById(`e-${campo}`);
    divError.innerHTML = `<div class="invalid-feedback">${mensaje}</div>`;
    document.getElementById(campo).classList.add('is-invalid');
}

// Función para verificar la validez de un campo
const verificarCampo = (campo) => {
    const input = document.getElementById(campo);
    const valor = input.value.trim();
    const divError = document.getElementById(`e-${campo}`);
    divError.innerHTML = '';
    input.classList.remove('is-invalid');

    if (valor === '') {
        mostrarError(campo, 'El campo es obligatorio')
    }
}