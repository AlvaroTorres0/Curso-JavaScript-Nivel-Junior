class App{
    constructor(nombre,cantidadDescargas,puntuacion,peso){
        this.nombre = nombre;
        this.cantidadDescargas = cantidadDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.abierta = false;
        this.instalada = false;
        this.informacion = {
            nombre: this.nombre,
            cantidadDescargas: this.cantidadDescargas,
            puntuacion: this.puntuacion,
            peso: this.peso
        }
    }

    instalar(){
        if(this.instalada == true){
            alert(`${this.nombre} ya se encuentra instalada en su dispositivo`);
        }else{
            this.instalada = true;
            alert(`Instalando ${this.nombre}...`);
            alert("Instalación finalizada");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert(`Desinstalando ${this.nombre}...`);
            alert("Aplicación desinstalada");
        }
    }

    abrir(){
        if(this.instalada == false){
            alert(`${this.nombre} no se encuentra instalada`);
        }
        else if(this.instalada == true && this.abierta==true){
            alert(`${this.nombre} ya se encuentra en ejecución`);
        }
        else if(this.instalada == true && this.abierta==false){
            this.abierta = true;
            alert(`Abriendo ${this.nombre}`);
        }
    }

    cerrar(){
        if(this.instalada == true && this.abierta == true){
            alert(`Cerrando ${this.nombre}`);
            this.abierta = false;
        }
        else if(this.instalada == false){
            alert(`${this.nombre} no instalado`);
        }
        else if(this.instalada == true && this.abierta == false){
            alert(`${this.nombre} no se encuentra en ejecución`);
        }
    }

    mostrarInfo(){
        return `
        Nombre: <b>${this.nombre}</b><br>
        Cantidad de descargas: <b>${this.cantidadDescargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        <br>       
        `
    }

}

//Principal
mostrarInformacion = (aplicacion) =>{
    
}

const facebook = new App("Facebook",80000000,4.7,167);
const whatsapp = new App("Whatsapp",103456732,4.3,124);
const instagram = new App("Instagram",2694321,4.2,178);
const telegram = new App("Telegram",4586234,4.4,206);
const messenger = new App("Messegner",6300765,4.0,98);

facebook.abrir();
facebook.instalar();
facebook.abrir();
facebook.abrir();

document.write(facebook.mostrarInfo());
document.write(whatsapp.mostrarInfo());
document.write(instagram.mostrarInfo());
document.write(telegram.mostrarInfo());
document.write(messenger.mostrarInfo());