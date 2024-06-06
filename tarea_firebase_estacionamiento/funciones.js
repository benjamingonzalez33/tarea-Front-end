import { edit, getData, remove, save, selectOne } from "./firestore.js";

let id = 0;

// Función para guardar o editar un vehículo
document.getElementById('btnGuardar').addEventListener('click', () => {
    document.querySelectorAll('.form-control').forEach(item => {
        verificar(item.id);
    });

    if (document.querySelectorAll('.is-invalid').length === 0) {
        const vehiculo = {
            patente: document.getElementById('patente').value,
            modelo: document.getElementById('modelo').value.trim(),
            marca: document.getElementById('marca').value.trim(),
            run: document.getElementById('run').value,
            nombre: document.getElementById('nombre').value.trim(),
            fechaHoraIngreso: document.getElementById('fechaHoraIngreso').value,
            fechaHoraSalida: document.getElementById('fechaHoraSalida').value
        };

        if (document.getElementById('btnGuardar').value === 'Guardar') {
            save(vehiculo);
        } else {
            edit(id, vehiculo);
            id = 0;
        }

        limpiar();
    }
});

// Función para cargar los registros al iniciar la aplicación
window.addEventListener('DOMContentLoaded', () => {
    getData((datos) => {
        let tabla = '';
        datos.forEach((doc) => {
            const item = doc.data();

            // Formatear las fechas y horas para mostrar en la tabla
            const fechaIngreso = new Date(item.fechaHoraIngreso).toLocaleDateString();
            const horaIngreso = new Date(item.fechaHoraIngreso).toLocaleTimeString();
            const fechaSalida = new Date(item.fechaHoraSalida).toLocaleDateString();
            const horaSalida = new Date(item.fechaHoraSalida).toLocaleTimeString();

            tabla += `<tr>
                <td>${item.patente}</td>
                <td>${item.modelo}</td>
                <td>${item.marca}</td>
                <td>${item.run}</td>
                <td>${item.nombre}</td>
                <td>${fechaIngreso}</td>
                <td>${horaIngreso}</td>
                <td>${fechaSalida}</td>
                <td>${horaSalida}</td>
                <td nowrap>
                    <button class="btn btn-warning" id="${doc.id}">Editar</button>
                    <button class="btn btn-danger" id="${doc.id}">Eliminar</button>
                </td>
            </tr>`;
        });

        document.getElementById('contenido').innerHTML = tabla;

        // Agregar eventos click a los botones Eliminar
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', () => {
                Swal.fire({
                    title: "¿Está seguro que desea eliminar el registro?",
                    text: "No podrá revertir los cambios",
                    icon: "error",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Eliminar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        remove(btn.id);
                        Swal.fire({
                            title: "Eliminado!",
                            text: "Su registro ha sido eliminado!",
                            icon: "success"
                        });
                    }
                });
            });
        });

        // Agregar eventos click a los botones Editar
        document.querySelectorAll('.btn-warning').forEach(btn => {
            btn.addEventListener('click', async () => {
                const vehiculo = await selectOne(btn.id);
                const v = vehiculo.data();

                document.getElementById('patente').value = v.patente;
                document.getElementById('modelo').value = v.modelo;
                document.getElementById('marca').value = v.marca;
                document.getElementById('run').value = v.run;
                document.getElementById('nombre').value = v.nombre;
                document.getElementById('fechaHoraIngreso').value = v.fechaHoraIngreso;
                document.getElementById('fechaHoraSalida').value = v.fechaHoraSalida;

                document.getElementById('btnGuardar').value = 'Editar';
                document.getElementById('patente').readOnly = true;

                id = vehiculo.id;
            });
        });
    });
});