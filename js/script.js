const vista = document.getElementById("ciudadClick-javascript");
const contenedor = document.getElementById("ciudadVisible-javaScript");
let ciudad = 0;
vista.addEventListener("click", evento=>{
    ciudad++;
    if(ciudad == 0 || ciudad== 2){
        console.log("ingreso 1");
        contenedor.classList.remove("caja-invisible")
        contenedor.classList.add("caja-visible");
        ciudad = 0;
    }else if(ciudad == 1){
        console.log("ingreso 2");
        contenedor.classList.remove("caja-visible")
        contenedor.classList.add("caja-invisible");
    }
})


const vistaDia = document.getElementById("diaClick-javascript");
const contenedorDia = document.getElementById("diaVisible-javascript");
let dia = 0;
vistaDia.addEventListener("click", evento=>{
    dia++;
    if(dia == 0 || dia== 2){
        contenedorDia.classList.remove("caja-invisible")
        contenedorDia.classList.add("caja-visible");
        dia = 0;
    }else if(dia == 1){
        contenedorDia.classList.remove("caja-visible")
        contenedorDia.classList.add("caja-invisible");
    }
})

const vistaProyeccion = document.getElementById("proyeccionClick-javascript");
const contenedorProyeccion = document.getElementById("proyeccionVisible-javascript");
let proyeccion = 0;
vistaProyeccion.addEventListener("click", evento=>{
    proyeccion++;
    if(proyeccion == 0 || proyeccion== 2){
        contenedorProyeccion.classList.remove("caja-invisible")
        contenedorProyeccion.classList.add("caja-visible");
        proyeccion = 0;
    }else if(proyeccion == 1){
        contenedorProyeccion.classList.remove("caja-visible")
        contenedorProyeccion.classList.add("caja-invisible");
    }
})

const vistaComplejos = document.getElementById("complejosClick-javascript");
const contenedorComplejos = document.getElementById("complejosVisible-javascript");
let complejos = 0;
vistaComplejos.addEventListener("click", evento=>{
    complejos++;
    if(complejos == 0 || complejos== 2){
        contenedorComplejos.classList.remove("caja-invisible")
        contenedorComplejos.classList.add("caja-visible");
        complejos = 0;
    }else if(complejos == 1){
        contenedorComplejos.classList.remove("caja-visible")
        contenedorComplejos.classList.add("caja-invisible");
    }
})