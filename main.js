class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie} de ${this.edad} años y soy de color ${this.color}<br>`;
    }

    verInformacion = () => {
        document.write(this.informacion);
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }    

    static ladrar = () => alert("Guau Guau");

    set setRaza(nuevaRaza){
        this.raza = nuevaRaza;
    }

    get getRaza(){
        return this.raza;
    }
}

perro1 = new Perro("perro",5,"Blanco");
perro1.verInformacion();

perro1.setRaza = "Pitbull";
document.write(`Mi raza es ${perro1.getRaza}<br>`);
perro1.setRaza = "Pastor Alemán";
document.write(`Mi raza es ${perro1.getRaza}<br>`);