function saludoCorrecto(target){
    return class extends target{
        nombre = "Clark";
        apellido = "Kent";

        saludo(){
            return `Buenos días, como esta Ud. Yo soy ${this.nombre} ${this.apellido}`
        }
    }
}

@saludoCorrecto
class Person{
    nombre:string;
    apellido:string;

    constructor(nom:string,ape:string){
        this.nombre = nom;
        this.apellido = ape;
    }

    saludo(){
        return `Hola causa soy ${this.nombre} ${this.apellido}`;
    }
}

let personita:Person = new Person("Bruno","Diaz");
console.log(personita.saludo());