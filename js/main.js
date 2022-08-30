
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
  
    
    if(emocion==="Feliz"){
        return Disfruta;
    }else if(emocion==="Alegre"){
        return Registralo;
    }else if(emocion==="Neutro"){
        return Medita;
    }else if(emocion==="Triste"){
        return Baila;
    }else if(emocion==="Enojado"){
        return Sacudite;
    }
}



ingresaNombre();
let emocion = mostrarEmociones();
let respuesta = respuestaEmocion(emocion);



