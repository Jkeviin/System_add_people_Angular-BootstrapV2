export class Persona{

    constructor(public nombre:string, public apellido:string){}

    toString(): string {
        return this.nombre + " " + this.apellido; 
    }
}