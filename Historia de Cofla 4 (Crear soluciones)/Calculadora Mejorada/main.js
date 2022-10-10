class Calculadora{
    suma = (numeros)=>{
        let resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
        return resultado;    
    }
    resta = (numeros) => {
        let resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
        return resultado;
    }
    multiplicacion = (numeros) => {
        let resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
        return resultado;
    }
    division = (numeros) => {
        let resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
        return resultado;
    }
    potencia = (numeros) =>{
        let resultado = numeros[0] ** numeros[1];
        return resultado;
    }
    raizCuadrada = (num) =>{
        let resultado = Math.sqrt(num);
        return resultado;
    }
    raizCubica = (num) =>{
        let resultado = Math.cbrt(num);
        return resultado;
    }
}

//Flujo principal
const calculadora = new Calculadora();
let decision = true;

function pedirNumeros(tipo){
    let numero1 = prompt("Ingresa el Número 1: ");
    if (tipo==2){
        let numeros = [numero1];       
        numeros.push(prompt("Ingresa el Número 2: "));
        return numeros;
    }else{
        return numero1;        
    }
}

do {
    let operacion = prompt("Selecciona una opción: 1.- Suma  2.- Resta   3.- Multiplicación  4.- División   5.- Potencia    6.- Raíz Cuadrada   7.- Raíz Cúbica");

    if (operacion>=1 && operacion<=5){
        var nums = pedirNumeros(2);
    }else{
        var nums = pedirNumeros(1);
    }

    if(operacion==1){
        alert(calculadora.suma(nums));
    }
    else if(operacion==2){
        alert(calculadora.resta(nums));        
    }
    else if(operacion==3){
        alert(calculadora.multiplicacion(nums));        
    }
    else if(operacion==4){
        alert(calculadora.division(nums));        
    }
    else if(operacion==5){
        alert(calculadora.potencia(nums));        
    }
    else if(operacion==6){
        alert(calculadora.raizCuadrada(nums));        
    }
    else if(operacion==7){
        alert(calculadora.raizCubica(nums));        
    }
    else{
        alert("Esa opción no existe");
    }

    operacion = prompt("¿Deseas hacer otra operación? (Si - No)");
    if(operacion == "No" || operacion == "no"){
        decision = false;
    }
} while (decision == true);