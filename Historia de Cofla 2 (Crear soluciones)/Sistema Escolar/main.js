let cantidadAlumnos = prompt("Digite la cantidad de alumnos en su clase: "); 
let listaAlumnos = [];

const paseDeLista = (cantidadAlumnos) => {
    for(let i = 0; i<cantidadAlumnos; i++){
        let estatus = prompt(`El alumno ${i+1} vino hoy?`)
        if (estatus == "P"){
            listaAlumnos[i][1]++;
        }
    }
}

const mostrarResultadosFinales = (alumnos,dias) => {
    const asistenciaMaxima = dias;
    for(let i = 0; i<alumnos; i++){
        let asistenciasTotales = listaAlumnos[i][1];
        let limiteFaltas = (dias * 10) / 100;

        document.write(`<h1>${listaAlumnos[i][0]}</h1>`);
        document.write(`Tuvo: <br> ${asistenciasTotales} Asistencias de ${dias} <br>`);
        if(asistenciaMaxima - asistenciasTotales > limiteFaltas){
            document.write('<span style="color: red">Reprobado por faltas</span>');
        }else{
            document.write("Aprobado");
        }
    }
}

// Código
for(let i = 0; i<cantidadAlumnos; i++){
    nombreAlumno = prompt(`Nombre del alumno ${i+1}: `);
    listaAlumnos[i] = [nombreAlumno,0];
}

for(let i = 0; i<3; i++){
    alert(`Día: ${i+1}`);
    paseDeLista(cantidadAlumnos);
}

mostrarResultadosFinales(cantidadAlumnos,3);