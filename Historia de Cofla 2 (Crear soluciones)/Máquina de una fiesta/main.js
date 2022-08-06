let entradaGratis = true; 

const validarPersona = (hora) => {
    let edad = prompt(`Bienvenido, son las ${hora} ingresa tu edad: `);
    if(edad>=18 && hora>=2 && entradaGratis==true){
        alert("Felicidades, entras y entras gratis, rey");
        entradaGratis = false;
    } 
    else if(edad>=18){
        alert("Entras, pero pagas");
    }
    else{
        alert("Lo siento rey, no pasas tas chiquito");
    }
}


validarPersona(1);
validarPersona(1.20);
validarPersona(1.40);
validarPersona(1.55);
validarPersona(2);
validarPersona(2);
validarPersona(2.3);
validarPersona(2.5);
validarPersona(3);
validarPersona(4);