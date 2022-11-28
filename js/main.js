
function ingresaNombre() {

    alert("Hola! Te encontras en mi emocion.com")
 
    let nombre = prompt(" Cual es tu nombre?");

    while(nombre === ""){

    nombre = prompt(" Cual es tu nombre?");
    }
}

function mostrarEmociones(){

let emocion;

do{
emocion = parseInt(prompt("Cual es tu estado de animo hoy?: \n1)Feliz\n2)Alegre\n3)Neutro\n4)Triste\n5)Enojado"))
}while(emocion!= 1 && emocion!=2 && emocion!=3 && emocion!=4 && emocion!=5)

switch(emocion){
    case 1:
        return "Feliz";
    case 2:
        return "Alegre";
    case 3:
        return "Neutro";
    case 4:
        return "Triste";
    case 5:
        return "Enojado";      
}

}

function respuestaEmocion(emocion){
    let respuesta
    if(emocion==="Feliz"){
        alert("Disfruta el momento");
    }else if(emocion==="Alegre"){
        alert("Registralo y ubicalo en una parte del cuerpo") ;
    }else if(emocion==="Neutro"){
        alert("Medita y contemplate en tu entorno");
    }else if(emocion==="Triste"){
        alert("Saca a bailar la tristeza");
    }else if(emocion==="Enojado"){
        alert("Usa esa energia en una actividad fisica, corres ? hacelo con intervalos intensos y transpira");
    }
}



ingresaNombre();
let emocion = mostrarEmociones();
let respuesta = respuestaEmocion(emocion);
/*
function persona(nombre,edad,nacionalidad){
    this.nombre = nombre
    this.edad = edad
    this.nacionalidad = nacionalidad
}

const persona1 = new persona("Juana de Arco",29 ,"Francia" )
console.log(persona1)

let persona;*/





/*const persona = {
    nombre : "Juana",
    apellido : "de Arco",
    edad : "29",
}
persona.pais= "Francia"
console.log(persona)*/



let registroCalendario = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(bisiesto(2020))

function escribeMes(mes){

}

function cantidadDias(mes){

}

function bisiesto(){
    return((anioActual % 100 !==0) && (anioActual % 4 ===0) || (anioActual % 400 ===0)) 

    }

function starDia(){

}

function mesAnterior(){

}

function mesProximo(){

}

function nuevaFecha(){

}