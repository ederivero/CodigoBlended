function Madre(target,key){
    console.log(`Es buenas tardes! - ${key}`)
}

class Persona{
    private nombre:string;
    private apellido:string;

    constructor(nom:string, ape:string){
        this.nombre = nom;
        this.apellido = ape;
    }
    // El decorador siempre va con una @Nombre_decorador y encima
    @Madre
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
}

let alumno:Persona = new Persona("Juan","Perez");
alumno.saludar();