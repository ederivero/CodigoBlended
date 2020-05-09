interface Estandar{
    nombre:string;
    tiempo:number;
    obligatorio:boolean;

    hacerTarea():void;
}

class Tarea implements Estandar{
    nombre:string;
    tiempo:number;
    obligatorio:boolean;

    hacerTarea():void{
        console.log(`la tarea de ${this.nombre} demorará ${this.tiempo} horas`);
    }
}