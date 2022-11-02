import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  ngOnInit(): void {
   
  }
}
