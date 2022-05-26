import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PageErrorComponent } from './componentes/page-error/page-error.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'logeo', component:FormularioLoginComponent},
  {path: 'cerrarSesion', component:HomeComponent},
  {path:'**', component: PageErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
