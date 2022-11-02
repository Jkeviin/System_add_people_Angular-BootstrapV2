import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService{
    personas: Persona[] = [];

    constructor(private loggingService: LoggingService,
                private dataService: DataService
        ){}

    //Lo usamos para iniciar el arreglo, ya que ya es asincrono desde la BD
    //Se inicializa desde el compoente PersonasComponent
    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.toString());
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
        //Si se guarda solo un elemento se debe trabajar cada indice y regenerarlos con cada modificacion
        //this.dataService.guardarPersona(persona, this.personas.length);

    }

    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        this.loggingService.enviaMensajeAConsola("persona encontrada:" + persona.toString());
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        this.loggingService.enviaMensajeAConsola("persona a modificar:" + persona.toString() + " con indice:" + index);
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(index, persona);

    }

    modificarPersonas(){
        this.loggingService.enviaMensajeAConsola("modificar todas las personas:");
        if(this.personas != null)
            //Guarda todas las personas nuevamente para regenerar indicess
            this.dataService.guardarPersonas(this.personas);
      
    }

    eliminarPersona(index:number){
        this.loggingService.enviaMensajeAConsola("eliminar persona con indice: " + index); 
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index);
        //Se vuelven a guardar todas las personas para que coincida el indice con el arreglo en memoria
        this.modificarPersonas();
    }
}