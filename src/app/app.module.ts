import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RedesComponent } from './componentes/redes/redes.component';

import { ApLogoComponent } from './componentes/ap-logo/ap-logo.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { LogeoComponent } from './componentes/logeo/logeo.component';
import { RouterModule, Routes } from '@angular/router';
import { BtnInicioSesionComponent } from './componentes/btn-inicio-sesion/btn-inicio-sesion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


const appRoutes:Routes=[
  {path: '', component:HomeComponent},
  {path: 'logeo', component:LogeoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,
    
    ApLogoComponent,
    AcercaDeComponent,
    LogeoComponent,
    BtnInicioSesionComponent,
    HomeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
