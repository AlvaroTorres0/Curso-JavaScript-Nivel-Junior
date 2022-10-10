class Celular{
    constructor(nombre,color,peso,resolucion,camara,memoria){
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.memoria = memoria;
        this.encendido = false;
        this.informacion = {
            nombre: this.nombre,
            color: this.color,
            peso: this.peso,
            resolucion: this.resolucion,
            camara: this.camara,
            memoria: this.memoria
        }
    }

    botonPower(){
        if (this.encendido == false) {
            this.encendido = true;
            alert(`${this.nombre} Encendiendo...`);
        }else{
            this.encendido = false;
            alert(`${this.nombre} Apagando...`);
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            alert(`${this.nombre} Reiniciando... Apagando...`)  ;  
            alert(`${this.nombre} Volviendo a encender...`)  ;                      
        }else{
            alert(`Su dispositivo ${this.nombre} se encuentra apagado, imposible reiniciar`);
        }
    }

    tomarFotos(){
        if (this.encendido == false) {
            alert(`Su dispositivo ${this.nombre} se encuentra apagado, no es posible tomar fotografías`);     
        }else{
            alert(`${this.nombre} tomando foto... Guardada con éxito`);
        }
    }

    grabarVideo(){
        if (this.encendido == false) {
            alert(`Su dispositivo ${this.nombre} se encuentra apagado, no es posible grabar`);             
        }else{
            alert(`${this.nombre} grabando video... Guardado con éxito`);
        }
    }

    get getEspecificaciones(){
        return this.informacion;
    }

}


class GamaAlta extends Celular{
    constructor(nombre,color,peso,resolucion,camara,memoria,certificaciones,precio,camaraextra){
        super(nombre,color,peso,resolucion,camara,memoria);
        this.certificaciones = certificaciones;
        this.precio = precio;
        this.camaraextra = camaraextra;
    }

    get getCertificaciones(){
        return this.certificaciones;
    }

    get getPrecio(){
        return this.precio;
    }

    get getCamaraExtra(){
        return this.camaraextra;
    }

    grabarEnCamaraLenta(){
        alert(`${this.nombre} grabando en cámara súper lenta..`);
    }
    
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
}



//Principal
mostrarEspecificacionesBajaMedia = (especs) =>{
    let especificaciones = `El dispositivo es un ${especs.nombre}, es de color ${especs.color}, tiene un peso de ${especs.peso} gr, su pantalla tiene una
    resolución de ${especs.resolucion} PX, su cámara principal es de ${especs.camara} PX y tiene una memoria RAM de ${especs.memoria} GB<br>`;

    return especificaciones;
}

mostrarEspecificacionesAlta = (especs,certificaciones,precio,camaraextra) =>{
    let especificaciones = `El dispositivo es un ${especs.nombre}, es de color ${especs.color}, tiene un peso de ${especs.peso} gr, su pantalla tiene una
    resolución de ${especs.resolucion} PX, su cámara principal es de ${especs.camara} MPX, tiene una memoria RAM de ${especs.memoria} GB, cuenta con reconocimiento facial, además de una cámara extra de ${camaraextra} MPX, cuenta con
    las certificaciones ${certificaciones} y tiene un precio de ${precio}<br>`;
    
    return especificaciones;
}


const onePlusNordN100 = new Celular("One Plus Nord1 N100","Negro Espacial",178,"2056 X 1080",24,4);
const samsungA71 = new Celular("Samsung A71","Oro Mate",155,"2056 X 1444",25,4);
const huaweiNova3 = new Celular("Huawei Nova 3","Blanco",185,"1920 X 1080",32,5);

const iphone14 = new GamaAlta("Iphone 14 Plus","Azul Oscuro",189,"2056 X 1444",58,6,"IP71, IP 98",38000,128);

let especificacionesOnePlus = onePlusNordN100.getEspecificaciones;
let especificacionesSamsung = samsungA71.getEspecificaciones;
let especificacionesHuawei = huaweiNova3.getEspecificaciones;
let especificacionesIphone = iphone14.getEspecificaciones;

document.write(mostrarEspecificacionesBajaMedia(especificacionesOnePlus));
document.write(mostrarEspecificacionesBajaMedia(especificacionesSamsung));
document.write(mostrarEspecificacionesBajaMedia(especificacionesHuawei));

document.write(mostrarEspecificacionesAlta(especificacionesIphone,iphone14.getCertificaciones,iphone14.getPrecio,iphone14.getCamaraExtra));