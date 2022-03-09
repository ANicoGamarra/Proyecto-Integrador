import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { ApLogoComponent } from './componentes/ap-logo/ap-logo.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { RouterModule, Routes } from '@angular/router';
import { BtnInicioSesionComponent } from './componentes/btn-inicio-sesion/btn-inicio-sesion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CuerpoPrincipalComponent } from './componentes/cuerpo-principal/cuerpo-principal.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from "@rinminase/ng-charts";




const appRoutes:Routes=[
  {path: '', component:HomeComponent},
  {path: 'logeo', component:FormularioLoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,    
    ApLogoComponent,
    AcercaDeComponent,    
    BtnInicioSesionComponent,
    HomeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,    
    MenuLateralComponent,
    CuerpoPrincipalComponent,
    FormularioLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
