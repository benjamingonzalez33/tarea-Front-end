// Función para validar el email
export const validaEmail = (email) => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return validEmail.test(email);
}

// Función para validar el run
export const validaRun = (run) => {
    // Lógica de validación del run
    return true;
}

// Función para validar la patente
export const validaPatente = (patente) => {
    // Lógica de validación de la patente
    return true;
}

// Otras funciones de validación