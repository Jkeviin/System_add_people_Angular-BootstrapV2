import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './personas/persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'personas', component: PersonasComponent, children: [
    { path: 'agregar', component: FormularioComponent },
    { path: ':id', component: FormularioComponent },
  ] },
  { path: '**', component: ErrorComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(
    routes
//    ,{ enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
