// OBJETOS DE LOS BOTONES
let inicio = {
    tituloSeccion: "Bienvenidos al Parque Natural de las Sierras de Cazorla",
    texto: `El <a target="_blank" href="https://es.wikipedia.org/wiki/Parque_natural_de_las_Sierras_de_Cazorla,_Segura_y_Las_Villas">Parque natural de las Sierras de Cazorla, Segura y Las Villas</a> es un espacio natural situado en el noreste de la provincia de Jaén (España) y cuenta con una extensión de 214 300 ha, se trata del mayor espacio protegido de España y el segundo de Europa. Está declarado como Reserva de la Biosfera por la UNESCO desde 1983, como Parque natural desde 1986 así como también Zona de Especial Protección para las Aves (ZEPA) desde 1987. Toda su belleza paisajística y riqueza biológica se unen al patrimonio cultural que existe en la zona, haciendo de su entorno una de las zonas naturales más visitadas de toda España. Dada su gran extensión, abarca 23 municipios con una población de aproximadamente 80 000 habitantes y por tanto el grado de protección varía de unas zonas a otras, permitiéndose en la mayoría del territorio la coexistencia con actividades económicas diversas.`
}

let especies = {
    tituloSeccion: "Especies animales del parque",
    animal: [
        {
            nombre: "Cabra montesa",
            descripcion: "La cabra montés o íbice ibérico (Capra pyrenaica) es una de las especies de bóvidos del género Capra que existen en Europa. Antiguamente repartido por el sur de Francia, Andorra, España y Portugal, la cabra montés es un endemismo que actualmente se encuentra principalmente en las áreas montañosas de España y del norte de Portugal.",
            imagen: "imagenes/animales/cabraMontesa.jpg"
        },
        {
            nombre: "Ciervo",
            descripcion: "Los cérvidos (Cervidae) son una familia de mamíferos rumiantes que incluye los ciervos o venados. Su tamaño es variable, siendo el alce el mayor (hasta 450 kg), y el venadito o pudú del norte, el menor, con unos 8 o 10 kg.",
            imagen: "imagenes/animales/ciervo.webp"
        },
        {
            nombre: "Buitre leonado",
            descripcion: "El buitre leonado (Gyps fulvus, del griego, γύψ, gýps (buitre) y el latín fulvus (rubio o rojizo)). Es una especie de ave accipitriforme de la familia Accipitridae, y uno de los pocos buitres que se pueden encontrar en Europa junto con el buitre negro, el alimoche y el quebrantahuesos.",
            imagen: "imagenes/animales/buitreLeonado.jpg"
        },
    ]
}

let reservas = {
    tituloSeccion: "Reservas",
    infoReservas: "El acceso al Parque es gratuito, siempre que se respeten las normas de conducta y preservacion  del mismo.<br>No obstante tambien se disponen de servicio adicionales, como vistas guiadas, aulas educativas.",
    titulo1: "Horarios y Reservas",
    tablas: [
        {
            descripcion: "Visitas con guía",
            filas: [
                [
                    "<td></td>",
                    '<td colspan="2" class="celdaVerde">Temporada de Verano</td>',
                    '<td colspan="2" class="celdaVerde">Temporada de Invierno</td>'
                ],
                [
                    '<td class="celdaVerde">Horarios</td>',
                    '<td colspan="2">10:00 - 13:00<br>16:00 - 18:00</td>',
                    '<td colspan="2">11:00 - 14:00</td>'
                ],
                [
                    '<td rowspan=2 class="celdaVerde">Tarifas</td>',
                    "<td>Individual</td>",
                    "<td>Grupos</td>",
                    "<td>Individual</td>",
                    "<td>Grupos</td>"
                ],
                [
                    "<td>5€ persona</td>",
                    "<td>3€ persona</td>",
                    "<td>4€ persona</td>",
                    "<td>2€ persona</td>"
                ]
            ]
        },
        {
            descripcion: "Aula educativa (sólo grupos)",
            filas: [
                [
                    "<td></td>",
                    '<td colspan="2" class="celdaVerde">Temporada de Verano</td>',
                    '<td colspan="2" class="celdaVerde">Temporada de Invierno</td>'
                ],
                [
                    '<td class="celdaVerde">Horarios</td>',
                    '<td colspan="2">9:00 - 10:00<br />15:00 - 16:00</td>',
                    '<td colspan="2">10:00 - 11:00</td>'
                ],
                [
                    '<td rowspan="2" class="celdaVerde">Tarifas</td>',
                    '<td colspan="2">25€</td>',
                    '<td colspan="2">25€</td>',
                ]
            ]
        }
    ],
    titulo2: "Contacto",
    infoContacto: "Si estas pensando visitar el parque con un grupo, por favor rellena el siguente formulario:",
    edadOptions: [
        {nombre: "De 5 a 8 años", valor: "5-8"},
        {nombre: "De 9 a 14 años", valor: "9-14"},
        {nombre: "De 15 a 18 años", valor: "15-18"},
        {nombre: "Adultos", valor: "+18"}
    ]
}

let galeria = {
    tituloSeccion: "Galeria Fotográfica",
    imagenes: ["imagenes/galeria/1.jpg", "imagenes/galeria/2.jpg", "imagenes/galeria/3.jpg", "imagenes/galeria/4.jpg", "imagenes/galeria/5.webp"]
}


// -----------------------------------------------------------------------------------------------------------------------------
let botonInicio = document.getElementById("botonInicio");
let botonEspecies = document.getElementById("botonEspecies");
let botonReservas = document.getElementById("botonReservas");
let botonGaleria = document.getElementById("botonGaleria");

let tituloSeccion = document.getElementById("tituloSeccion");
let contenido = document.getElementById("contenido");

// se llama al pulsar cada botón. Limpia el contenido para añadir el nuevo dinámicamento, dependiendo del botón que se pulse.
function limpiarContenido() {
    if (contenido.hasChildNodes) {
        while(contenido.firstChild) {
            contenido.removeChild(contenido.firstChild);
        }
    }
}

// ----------------------------------------------------- INICIO -----------------------------------------------------
botonInicio.addEventListener('click', function() {
    limpiarContenido();
    tituloSeccion.innerHTML = inicio.tituloSeccion;

    if (!contenido.firstChild) {
        let p = document.createElement('p');
        p.innerHTML = inicio.texto;
        contenido.appendChild(p);
    }
});

// ----------------------------------------------------- ESPECIES -----------------------------------------------------
botonEspecies.addEventListener('click', function() {
    limpiarContenido();
    tituloSeccion.innerHTML = especies.tituloSeccion;
    contenido.style.display = 'flex'; // establezco el estilo del display dependiendo de la seccción que estemos

    // div texto (contenedor)
    let descripcionEspecieDiv = document.createElement('div');
    descripcionEspecieDiv.id = 'descripcionEspecieDiv';
    contenido.appendChild(descripcionEspecieDiv);

    // divs de animales
    especies.animal.forEach(function(animal) {
        // primero creo un div por animal
        let animalDiv = document.createElement('div');
        animalDiv.className = 'animalDiv';
        descripcionEspecieDiv.appendChild(animalDiv);

        // después creo un título y una descripción por animal
        let tituloAnimal = document.createElement('p');
        tituloAnimal.className = 'tituloAnimal';
        tituloAnimal.innerHTML = animal.nombre;
        animalDiv.appendChild(tituloAnimal);
        
        let descripcionAnimal = document.createElement('p');
        descripcionAnimal.className = 'descripcionAnimal';
        descripcionAnimal.innerHTML = animal.descripcion;
        animalDiv.appendChild(descripcionAnimal);
    });

    // div imagen
    let imagenEspecieDiv = document.createElement('div');
    imagenEspecieDiv.id = 'imagenEspecieDiv';
    contenido.appendChild(imagenEspecieDiv);

    // evento hover imagenes    
    let animales = document.querySelectorAll('.animalDiv');
    let imagenEspecie = document.getElementById('imagenEspecieDiv');
    let img = document.createElement('img');
    img.className = 'imagenAnimal';
    for (let i = 0; i < animales.length; i++) {
        // control para que la imagen por defecto solo se añada una vez
        if (!imagenEspecie.firstChild) {
            img.src = 'imagenes/animales/default.webp';
            imagenEspecie.appendChild(img);
        }

        animales[i].addEventListener('mouseover', function() {
            while (imagenEspecie.firstChild) {
                imagenEspecie.removeChild(imagenEspecie.firstChild);
            }
            let animal = especies.animal[i];
            img.src = animal.imagen;
            imagenEspecie.appendChild(img);
        });
        
        animales[i].addEventListener('mouseout', function() {
            img.src = 'imagenes/animales/default.webp';
            imagenEspecie.appendChild(img);
        });
    }
});

// ----------------------------------------------------- RESERVAS -----------------------------------------------------
botonReservas.addEventListener('click', function() {
    limpiarContenido();
    tituloSeccion.innerHTML = reservas.tituloSeccion;
    contenido.style.display = 'block'; // establezco el estilo del display dependiendo de la seccción que estemos

    // p informacion reservas
    let infoReservas = document.createElement('p');
    infoReservas.innerHTML = reservas.infoReservas;
    infoReservas.className = 'pReservas';
    contenido.appendChild(infoReservas);
    contenido.appendChild(document.createElement("br"));

    // p titulo1
    let titulo1 = document.createElement('p');
    titulo1.innerHTML = reservas.titulo1;
    titulo1.className = 'titulosReservas';
    contenido.appendChild(titulo1);

    // tablas
    reservas.tablas.forEach(function(codigoTablas) {
        let tablaReservas = document.createElement("table");
        tablaReservas.className = 'tablaReservas';
        contenido.appendChild(tablaReservas);

        // descripción de la tabla
        let tablaDescripcion = tablaReservas.insertRow().insertCell();
        tablaDescripcion.textContent = codigoTablas.descripcion;
        tablaDescripcion.colSpan = 5;
        tablaDescripcion.className = 'descTabla';
        
        // itero las filas
        codigoTablas.filas.forEach(function(fila) {
            let filaTabla = tablaReservas.insertRow();
            fila.forEach(function(datosCelda) {
                filaTabla.innerHTML += datosCelda;
            });
        });
    });

    // p titulo2
    let titulo2 = document.createElement('p');
    titulo2.innerHTML = reservas.titulo2;
    titulo2.className = 'titulosReservas';
    contenido.appendChild(titulo2);
    
    // p infoContacto
    let infoContacto = document.createElement('p');
    infoContacto.innerHTML = reservas.infoContacto;
    infoContacto.className = 'pReservas';
    contenido.appendChild(infoContacto);

    // boton
    let botonCuestionario = document.createElement('button');
    botonCuestionario.innerHTML = 'Cuestionario';
    botonCuestionario.id = 'botonCuestionario';
    contenido.appendChild(botonCuestionario);

    let cuestionario = document.getElementById('botonCuestionario');
    cuestionario.addEventListener('click', function() {
        limpiarContenido();

        //form
        let formulario = document.createElement('form');
        formulario.method = 'get';
        contenido.appendChild(formulario);

        //label nombre
        let labelNombreInput = document.createElement('label');
        labelNombreInput.for = 'nombre';
        labelNombreInput.innerHTML = 'Nombre: ';
        formulario.appendChild(labelNombreInput);

        // input nombre
        let nombreInput = document.createElement('input');
        nombreInput.type = 'text';
        nombreInput.name = 'nombre';
        formulario.appendChild(nombreInput);

        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(document.createElement("br"));

        //label email
        let labelEmailInput = document.createElement('label');
        labelEmailInput.for = 'email';
        labelEmailInput.innerHTML = 'e-mail: ';
        formulario.appendChild(labelEmailInput);

        // input email
        let emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailInput.name = 'email';
        formulario.appendChild(emailInput);

        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(document.createElement("br"));

        //label fecha
        let labelFechaInput = document.createElement('label');
        labelFechaInput.for = 'fecha';
        labelFechaInput.innerHTML = 'Fecha: ';
        formulario.appendChild(labelFechaInput);

        // input fecha
        let fechaInput = document.createElement('input');
        fechaInput.type = 'date';
        fechaInput.name = 'fecha';
        formulario.appendChild(fechaInput);

        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(document.createElement("br"));

        //label numero
        let labelNumeroInput = document.createElement('label');
        labelNumeroInput.for = 'numero';
        labelNumeroInput.innerHTML = 'Número: ';
        formulario.appendChild(labelNumeroInput);

        // input numero
        let numeroInput = document.createElement('input');
        numeroInput.type = 'text';
        numeroInput.name = 'numero';
        formulario.appendChild(numeroInput);

        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(document.createElement("br"));

        // label (p) edad
        let labelEdad = document.createElement('p');
        labelEdad.style.margin = 0;
        labelEdad.innerHTML = 'Edad del grupo:';
        formulario.appendChild(labelEdad);

        // input edad
        reservas.edadOptions.forEach(function(dato) {
            // radio edad
            let edadInput = document.createElement('input');
            edadInput.type = 'radio';
            edadInput.name = 'edad';
            edadInput.value = dato.valor;
            formulario.appendChild(edadInput);
            
            //label edad
            let labelEdadInput = document.createElement('label');
            labelEdadInput.for = 'edad';
            labelEdadInput.innerHTML = dato.nombre;
            formulario.appendChild(labelEdadInput);
            formulario.appendChild(document.createElement("br"));
        });
        formulario.appendChild(document.createElement("br"));

        // boton enviar
        let btnEnviar = document.createElement('button');
        btnEnviar.type = 'submit';
        btnEnviar.id = 'botonEnviar';
        btnEnviar.className = 'boton';
        btnEnviar.innerHTML = 'Enviar';
        formulario.appendChild(btnEnviar);

        formulario.addEventListener('submit', function(event) {
            function crearVentanaModal(mensaje) {
                let modalError = document.createElement('dialog');
                modalError.style.fontFamily = "'DM Sans', sans-serif";
                modalError.style.textAlign = 'center';
                document.body.appendChild(modalError); // uso document.body para que la ventana modal apareza como hijo principal, y que no salga descentrada
                let mensajeModalError = document.createElement('p');
                mensajeModalError.innerHTML = mensaje;
                modalError.appendChild(mensajeModalError);
                let botonModalError = document.createElement('button');
                botonModalError.className = 'boton';
                botonModalError.innerHTML = 'Cerrar';
                modalError.appendChild(botonModalError);

                modalError.showModal();
                botonModalError.addEventListener('click', function(){
                    modalError.close();
                });
                return;
            }

            event.preventDefault(); // hace que la página no se recargue
            let nombre = nombreInput.value;
            let email = emailInput.value;
            let fecha = fechaInput.value;
            let numero = numeroInput.value;
            let edadSeleccionada = formulario.querySelector('input[name="edad"]:checked'); // busca el primer elemento input cuyo atributo name sea edad y esté marcado

            if (!nombre && !email && !fecha && !numero) {
                crearVentanaModal('Por favor, completa todos los campos.');
                return;
            }

            // check email
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                crearVentanaModal('Por favor, ingresa un e-mail válido.');
                return;
            }

            // check fecha
            let fechaIngresada = new Date(fecha);
            let fechaActual = new Date();
            if (isNaN(fechaIngresada.getTime()) || fechaIngresada <= fechaActual) {
                console.log(fechaIngresada.getTime());
                crearVentanaModal('Por favor, ingresa una fecha válida.');
                return;
            }

            // check numero
            if (isNaN(numero) || numero <= 0 || numero >= 50) {
                crearVentanaModal('Por favor, ingresa un número de personas válido (entre 1 y 49).');
                return;
            }

            // check edad
            if (!edadSeleccionada) {
                crearVentanaModal('Por favor, selecciona la edad del grupo.');
                return;
            }

            crearVentanaModal(`Nombre: ${nombre}<br>Email: ${email}<br>Fecha: ${fecha}<br>Número: ${numero}<br>Edad: ${edadSeleccionada.value}`);
        });
    });
});

// ----------------------------------------------------- GALERIA -----------------------------------------------------
botonGaleria.addEventListener('click', function() {
    limpiarContenido();
    tituloSeccion.innerHTML = galeria.tituloSeccion;
    contenido.style.display = 'block'; // establezco el estilo del display dependiendo de la seccción que estemos

    // div imagenes
    let containerImagen = document.createElement('div');
    containerImagen.id = 'containerImagen';
    contenido.appendChild(containerImagen);

    //div botones
    let containerControles = document.createElement('div');
    containerControles.id = 'containerControles';
    contenido.appendChild(containerControles);

    //botones
    let btnVolver = document.createElement('button');
    btnVolver.className = 'botonesGaleria';
    btnVolver.id = 'botonVolver';
    btnVolver.innerHTML = '<';
    containerControles.appendChild(btnVolver);

    let btnSiguiente = document.createElement('button');
    btnSiguiente.className = 'botonesGaleria';
    btnSiguiente.id = 'botonSiguiente';
    btnSiguiente.innerHTML = '>';
    containerControles.appendChild(btnSiguiente);

    let botonVolver = document.getElementById("botonVolver");
    let botonSiguiente = document.getElementById("botonSiguiente");

    // imagen
    let indiceImagen = 0;

    let imagen = document.createElement('img');
    imagen.id = 'imgGaleria';
    containerImagen.appendChild(imagen);

    function mostrarImagen() {
        let img = document.getElementById("imgGaleria");
        img.src = galeria.imagenes[indiceImagen];
    }

    // muestra la primera imagen por defecto
    mostrarImagen();

    botonVolver.addEventListener('click', function() {
        if (indiceImagen >= 1) {
            indiceImagen -= 1;
        } else {
            indiceImagen = 0;
            btnVolver.disabled = true;
        }
        btnSiguiente.disabled = false;
        mostrarImagen();
    });

    botonSiguiente.addEventListener('click', function() {
        if (indiceImagen <= 3) {
            indiceImagen += 1;
        } else {
            indiceImagen = 4;
            btnSiguiente.disabled = true;
        }
        btnVolver.disabled = false;
        mostrarImagen();
    });
});

// la página aparece por defecto en Inicio
botonInicio.click();