class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie} de ${this.edad} años y soy de color ${this.color}<br>`;
    }

    verInformacion = () => {
        document.write(this.informacion);
    }
    verInfo(){
        document.write(this.informacion);
    }
}

let buho = new animal("Buho",5,"Negro");
let gato = new animal("Gato",1,"Blanco");
let perro = new animal("Perro",2,"Café");

buho.verInformacion();
gato.verInformacion();
perro.verInformacion();