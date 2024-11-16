//function myFunction() {
    const botonLeerMas = document.getElementById('leer_mas');
    const curriculum = document.getElementById('curriculum');   

    botonLeerMas.addEventListener('click', () => {
    console.log(botonLeerMas.textContent);
    console.log(curriculum.textContent);
    curriculum.classList.toggle('oculto');
    botonLeerMas.textContent = curriculum.classList.contains('oculto') ? 'Leer más' : 'Leer menos';
    });
//} 

function toggleContenido() {
    const elemento = document.getElementById('miElemento');
    console.log(elemento);
    elemento.classList.toggle('curriculum');
    this.textContent = elemento.classList.contains('curriculum') ? 'Leer más' : 'Leer menos';
}

function toggleContent() {
    const fullContent = document.getElementById("full-content");
    const readMoreBtn = document.getElementById("read-more-btn");

    fullContent.classList.toggle('hidden');
    readMoreBtn.textContent = fullContent.classList.contains('hidden') ? 'Leer más' : 'Leer menos';

    /*
    if (fullContent.classList.contains("hidden")) {
        fullContent.classList.remove("hidden");
        readMoreBtn.textContent = "Leer menos";
    } else {
        fullContent.classList.add("hidden");
        readMoreBtn.textContent = "Leer más";
    }
    */
}

// Array para relacionar elementos con columnas
const mapElementosColumnas = [
    
        { selector: 'input[name="nombre"]',     columna: "tnombre" },
        { selector: 'input[name="apellido"]',   columna: "tapellido" },
        { selector: 'input[name="email"]',      columna: "temail" },
        { selector: 'input[name="telefono"]',   columna: "ttelefono" },
        { selector: 'input[name="fechanacimiento"]', columna: "tfechanacimiento" },
        { selector: 'textarea[name="direccion"]',  columna: "tdireccion" },
        { selector: 'input[name="edad"]',       columna: "tedad" },
        { selector: 'input[name="provincia"]',  columna: "tprovincia" },
        { selector: 'input[name="codigopostal"]', columna: "tcodigopostal" },
        { selector: 'input[name="contacto"]',   columna: "tformacontacto" },
        { selector: 'input[type="checkbox"]',   columna: "tsuscripcion" }
    ]

    /*
    //{ selector: '.input-valor', columna: 'celda2-valor1' },
    { selector: 'input[type="text"]', columna: 'celda2-valor1' },
    { selector: 'input[name="contacto"]', columna: 'celda2-opcion' },
    { selector: 'input[type="checkbox"]', columna: 'celda2-checkbox' }
    ];
    */

    // Obtener todas las filas de la tabla
    //const filas = document.querySelectorAll('tbody tr');

    mapElementosColumnas.forEach(mapping => {
    const elementos = document.querySelectorAll(mapping.selector);
    elementos.forEach(elemento => {
        elemento.addEventListener('blur', () => {
        //const celda = filas[0].querySelector(`#${mapping.columna}`); // Asumimos una sola fila por ahora
        //const celda = querySelector(`#${mapping.columna}`); // Asumimos una sola fila por ahora
        //+console.log('#'+mapping.columna);            
        const celda = document.querySelector('#'+mapping.columna);
        //+console.log(celda);
        switch (elemento.type) {
            case 'text':
            case 'textarea':            
            case 'tel':
            case 'email':
            case 'range':
            case 'date':
            celda.textContent = elemento.value;
            break;
            case 'radio':
            celda.textContent = elemento.checked ? elemento.value : '';
            break;
            case 'checkbox':
            celda.textContent = elemento.checked ? elemento.value : '';
            break;
        }
        });
    });
    });