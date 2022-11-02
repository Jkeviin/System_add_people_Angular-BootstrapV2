import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import { Subscriber } from 'rxjs';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-c95f2-default-rtdb.firebaseio.com/datos.json')
    }

    //Guarda todo el arreglo de personas
    guardarPersonas(personas: Persona[]) {
        this.httpClient.put('https://listado-personas-c95f2-default-rtdb.firebaseio.com/datos.json', personas)
            .subscribe(
                (response) => {
                    console.log("resultado guardar Personas: " + response);
                },
                (error) => console.log("Error en guardar Personas: " + error)
            );
    }


    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-c95f2-default-rtdb.firebaseio.com' + '/datos/' + index + '.json';
        console.log("url de modificarPersona:" + url);
        this.httpClient.put( url, persona)
            .subscribe(
                (response) => {
                    console.log("resultado modificar Persona: " + response);
                },
                (error) => console.log("Error en modificar Persona: " + error)
            );
    }

    eliminarPersona(index:number){
        let url: string;
        url = 'https://listado-personas-c95f2-default-rtdb.firebaseio.com' + '/datos/' + (index) + '.json';
        console.log("url de eliminarPersona:" + url);
        this.httpClient.delete( url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Persona: " + response);
                },
                (error) => console.log("Error en eliminar Persona: " + error)
            );
    }

}

