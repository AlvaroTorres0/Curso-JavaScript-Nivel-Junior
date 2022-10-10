class Materia{
    constructor(nombre,profesor,alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.clase = [alumnos];
    }
    get getNombreClase(){
        return this.nombre;
    }
    get getClase(){
        return this.clase;
    }

    get getProfesor(){
        return this.profesor;
    }

    mostrarClase() {
        if (this.clase[0] == this.profesor){
            return this.clase;
        }else{
            this.clase.unshift(this.profesor);
            return this.clase;
        }
    }
}

//Flujo principal
clasesCofla = (array,nombreAlumno) =>{
    for (let i = 0; i < array.length; i++) {
        let clase = array[i].getClase;
        let cadenaClase = clase.join();

        if(cadenaClase.includes(nombreAlumno)){
            document.write(`<b>${array[i].getNombreClase} y la imparte ${array[i].getProfesor}</b><br>`);
        }
    }
}

calcularMateriasCofla = (array,nombreAlumno) => {
    let materiasTotales = 0;
    for (let i = 0; i < array.length; i++) {
        let clase = array[i].getClase;
        let cadenaClase = clase.join();
        if(cadenaClase.includes(nombreAlumno)){
            materiasTotales+=1;
        }        
    }
    document.write(`<h1>${nombreAlumno} se encuentra registrado en ${materiasTotales} clases</h1>`);
}
    

let alumnosMatematicas = ["Álvaro","Rigo","Efraín","Karen","Manuel","Cofla"];
const matematicas = new Materia("Matemáticas","Juan Carlos",alumnosMatematicas);

let alumnosFisica = ["Álvaro","Rigo","Efraín","Karen","Harumi","Sara"];
const fisica = new Materia("Física","Juan Marcos",alumnosFisica);

let alumnosHistoria = ["Rigo","Efraín","Josel","Cofla","Álgel"];
const historia = new Materia("Historía","Juan Daniel",alumnosHistoria);

//Creamos un array de objetos para tener un acceso e iterar en las sigiente funciones
const arregloClases = [matematicas,fisica,historia];


let claseMatematicas = matematicas.mostrarClase();
alumnosMatematicas = claseMatematicas.slice(1);
let claseFisica = fisica.mostrarClase();
alumnosFisica = claseFisica.slice(1);
let claseHistoria = historia.mostrarClase();
alumnosHistoria = claseHistoria.slice(1);


document.write(`<h1>Clase de ${matematicas.getNombreClase}</h1> <br> <b>Profesor: ${claseMatematicas[0]}</b> <br> <b>Alumnos: </b>${alumnosMatematicas}`);
document.write(`<h1>Clase de ${fisica.getNombreClase}</h1> <br> <b>Profesor: ${claseFisica[0]}</b> <br> <b>Alumnos: </b>${alumnosFisica}`);
document.write(`<h1>Clase de ${historia.getNombreClase}</h1> <br> <b>Profesor: ${claseHistoria[0]}</b> <br> <b>Alumnos: </b>${alumnosHistoria}`);


//Mostramos la cantidad de materias en la que está Cofla
calcularMateriasCofla(arregloClases,"Efraín")
//Mostramos los datos de esas clases
clasesCofla(arregloClases,"Efraín");

//Mostramos la cantidad de materias en la que está Cofla
calcularMateriasCofla(arregloClases,"Josel")
//Mostramos los datos de esas clases
clasesCofla(arregloClases,"Josel");

//Mostramos la cantidad de materias en la que está Cofla
calcularMateriasCofla(arregloClases,"Álvaro")
//Mostramos los datos de esas clases
clasesCofla(arregloClases,"Álvaro");