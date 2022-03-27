import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'logeo', component:FormularioLoginComponent},
  {path: 'cerrarSesion', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
