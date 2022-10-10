class Materia {
    constructor(nombre,asistencia,trabajos,calificacion){
        this.informacion = {
            nombre: nombre,
            asistencia: asistencia,
            trabajos: trabajos,
            calificacion: calificacion,
            estado: null
        }
        this.calificar();
    }
    get getMateria(){
        return this.informacion;
    }
    get getEstado(){
        return this.informacion.estado;
    }
    
    calificar(){
        if((this.informacion.calificacion >= 7) && (this.informacion.asistencia >= 90) && (this.informacion.trabajos >= 75)){
            this.informacion.estado = "Aprobado";
        }else{
            this.informacion.estado = "Reprobado";
        }
    }
}

let matematicas = new Materia("Matemáticas",90,76,7);
let espaniol = new Materia("Español",70,76,7);
let fisica = new Materia("Fisica",100,86,9.5);
let historia = new Materia("Historia",97,95,9.3);
let geografia = new Materia("Geografía",93,75,8.3);
let arregloMaterias = [matematicas,espaniol,fisica,historia,geografia];

for (let i = 0; i < arregloMaterias.length; i++) {
    let arreglo = arregloMaterias[i].getMateria;
    if (arreglo.estado == "Aprobado") {
        console.log(`%cUsted aprobó ${arreglo.nombre}`,"color:green;");        
    }else{
        console.log(`%cUsted reprobó ${arreglo.nombre}`,"color:red;"); 
    }
    console.table(arreglo);
}