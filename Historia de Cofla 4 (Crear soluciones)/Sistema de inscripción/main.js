class Materia{
    constructor(nombre,profesor,alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.clase = [];
        this.registrarAlumnos(alumnos);
    }

    registrarAlumnos(alumnos){
        for (let i = 0; i < alumnos.length; i++) {
            this.clase.push(alumnos[i]);
        }
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

    incribirNuevoAlunmno(alumno){
        this.clase.push(alumno);
    }
        
    obtenerCantidadAlumnos(){
        return this.clase.length;
    }
}

//Flujo principal
seleccionarMaterias = (materias) => {
    var respuesta = false;
    do {
        let materiaSeleccionada = parseInt(prompt("Seleccione la materia a la que se desea incribir: 1.- Matemáticas   2.- Física  3.- Historia"));

        let cantidadAlumnos = materias[materiaSeleccionada-1].obtenerCantidadAlumnos();
        console.log(cantidadAlumnos);
        if(cantidadAlumnos>=21){
            alert("Grupo lleno =[");
        }else{
            let nombreAlumno = prompt("Ingrese su nombre: ");
            materias[materiaSeleccionada-1].incribirNuevoAlunmno(nombreAlumno);
            alert("Inscrito con éxito =)");
        }

        operacion = prompt("¿Deseas hacer inscribirse a otra materia? (Si - No)");
        if(operacion == "No" || operacion == "no"){
            respuesta = true;
        }
    } while (respuesta!=true);
}

mostrarClases = (clases) => {
    for (let i = 0; i < clases.length; i++) {
        let clase = clases[i].getClase;
        let alumnos = clase.slice(1);
        document.write(`<h1>Clase de ${clases[i].getNombreClase}</h1> <br> <b>Profesor: ${clases[i].getProfesor}</b> <br> <b>Alumnos: </b>${alumnos}`);
    }
}

let alumnosMatematicas = ["Álvaro","Rigo","Efraín","Karen","Manuel","Cofla","Karen","Jorge","Travieso","Juanito","Jenny","Elí","Joaquín","Edgar","Leonardo","Eduardo","Gilberto","Elizabeth","Betty","Javier"];
const matematicas = new Materia("Matemáticas","Juan Carlos",alumnosMatematicas);

let alumnosFisica = ["Álvaro","Rigo","Efraín","Karen","Harumi","Sara"];
const fisica = new Materia("Física","Juan Marcos",alumnosFisica);

let alumnosHistoria = ["Rigo","Efraín","Josel","Cofla","Álgel"];
const historia = new Materia("Historía","Juan Daniel",alumnosHistoria);

let clases = [matematicas,fisica,historia];

seleccionarMaterias(clases);
mostrarClases(clases)