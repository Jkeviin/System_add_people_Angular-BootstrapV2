import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router,
              private route:ActivatedRoute
              ){}

  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe(
      (response: any)=>{
        this.personas = Object.values(response);
        this.personasService.setPersonas(this.personas);
      }
    )
  }

    irAgregar(){
      console.log("nos vamos a agregar ");
      this.router.navigate(['./personas/agregar'],{queryParams:{modoEdicion:0}});
    }
}
