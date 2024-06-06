// Función para limpiar el formulario
const limpiar = () => {
    document.querySelector('form').reset();
    document.querySelectorAll('.form-control').forEach(item => {
        item.classList.remove('is-invalid');
        item.classList.remove('is-valid');
        document.getElementById('e-' + item.name).innerHTML = '';
    });
    // Restablecer el estado inicial de otros elementos si es necesario
};

// Función para permitir sólo entrada numérica
const soloNumeros = (evt) => {
    if (evt.keyCode >= 48 && evt.keyCode <= 57)
        return true;
    return false;
};

// Función para verificar la validez de un campo
const verificar = (id) => {
    const input = document.getElementById(id);
    const div = document.getElementById('e-' + id);
    input.classList.remove('is-invalid');

    // Verificar si el campo está vacío
    if (input.value.trim() === '') {
        input.classList.add('is-invalid');
        div.innerHTML = '<span class="badge bg-danger">El campo es obligatorio</span>';
    } else {
        input.classList.add('is-valid');
        div.innerHTML = '';

        // Agregar validaciones adicionales si es necesario
        // Por ejemplo: validar formato de email, rango de fechas, etc.
    }
};

// Otras funciones de utilidad (validaRun, validaEmail, etc.)