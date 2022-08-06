let decision = true;

const suma = (num1,num2) => {
    let resultado = parseInt(num1) + parseInt(num2);
    return resultado;    
}
const resta = (num1,num2) => {
    let resultado = parseInt(num1) - parseInt(num2);
    return resultado;
}
const multiplicacion = (num1,num2) => {
    let resultado = parseInt(num1) * parseInt(num2);
    return resultado;
}
const division = (num1,num2) => {
    let resultado = parseInt(num1) / parseInt(num2);
    return resultado;
}


do {
    let operacion = prompt("Selecciona una opción: 1.- Suma  2.- Resta   3.- Multiplicación  4.- División");
    let numero1 = prompt("Ingresa el Número 1: ");
    let numero2 = prompt("Ingresa el Número 2: ");

    if(operacion==1){
        alert(suma(numero1,numero2));
    }
    else if(operacion==2){
        alert(resta(numero1,numero2));        
    }
    else if(operacion==3){
        alert(multiplicacion(numero1,numero2));        
    }
    else if(operacion==4){
        alert(division(numero1,numero2));        
    }
    else{
        alert("Esa opción no existe");
    }

    operacion = prompt("¿Deseas hacer otra operación? (Si - No)");
    if(operacion == "No" || operacion == "no"){
        decision = false;
    }
} while (decision == true);