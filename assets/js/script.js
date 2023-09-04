//Elementos

const input = document.querySelector("#input");
const btnAgregar = document.querySelector("#btnAgregar");
const data = document.querySelector("#cantidad");
const tareas = document.querySelector("#tareas");
const total = document.querySelector("#total");

//Lista de tareas

let listaTareas = [];

// Recorrer lista
const cargarTareas = () => {
    tareas.innerHTML = "";

    listaTareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.id = tarea.id;

        li.innerHTML = `
        <p>${tarea.nombre}</p>
        <input id="casilla" type=checkbox>
        <button class="btnsEliminar">X</button>
        `;

        // Agregar lista a ul
        tareas.appendChild(li);
    });

    //Funcion botones eliminar
    const btnsEliminar = document.querySelectorAll(".btnsEliminar");
    btnsEliminar.forEach((btnsEliminar) => {
        btnsEliminar.addEventListener("click", (e) => {
            total.innerHTML = listaTareas.length - 1;
            const id = e.target.parentNode.id;
            console.log(e.target.parentNode.id);

            eliminarTarea(id);
        });
    });
};

//Funcion eliminar
const eliminarTarea = (id) => {
    //Filtro de la lista
    const filtrado = listaTareas.filter((tarea) => tarea.id != id);
    listaTareas = filtrado;
    console.log(filtrado);
    //Actualizacion de la lista
    cargarTareas();
};

//Evento del boton agregar
btnAgregar.addEventListener("click", () => {
    total.innerHTML = listaTareas.length + 1;
    const nombreTarea = input.value;

    listaTareas.push({
        id: Date.now(),
        nombre: nombreTarea,
    });
    console.log(listaTareas);

    input.value = "";
    cargarTareas();
});

// //Modificar status tareas
// const index = listaTareas.findIndex(tareas)=> tarea.id === id
// listaTareas[index].status = "Completada"
// cargarTareas();

// if
