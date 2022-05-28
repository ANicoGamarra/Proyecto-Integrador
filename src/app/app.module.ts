import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { ApLogoComponent } from './componentes/ap-logo/ap-logo.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginServiceService } from './servicios/login-service.service';
import { DatosPorfolioService } from './servicios/datos-porfolio.service';
import {MatDialogModule} from '@angular/material/dialog';



import { BtnEditarComponent } from './componentes/btn-editar/btn-editar.component';
import { BtnEliminarComponent } from './componentes/btn-eliminar/btn-eliminar.component'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AcercaDeModalComponent } from './componentes/modal/acerca-de-modal/acerca-de-modal.component';
import { HeaderModalComponent } from './componentes/modal/header-modal/header-modal.component';
import { FotoPerfilModalComponent } from './componentes/modal/foto-perfil-modal/foto-perfil-modal.component';
import { BtnAgregarComponent } from './componentes/btn-agregar/btn-agregar.component';
import { ExperienciaModalComponent } from './componentes/modal/experiencia-modal/experiencia-modal.component';
import { EducacionModalComponent } from './componentes/modal/educacion-modal/educacion-modal.component';
import { ProyectosModalComponent } from './componentes/modal/proyectos-modal/proyectos-modal.component';
import { SkillsModalComponent } from './componentes/modal/skills-modal/skills-modal.component';
import { ModalServiceService } from './servicios/modal-service.service';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosImagenesModalComponent } from './componentes/modal/proyectos-imagenes-modal/proyectos-imagenes-modal.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PageErrorComponent } from './componentes/page-error/page-error.component';
import { DragDropModule }  from '@angular/cdk/drag-drop';





/* 
const appRoutes:Routes=[
  {path: '', component:HomeComponent },
  {path: 'logeo', component:FormularioLoginComponent},
  {path: 'cerrarSesion', component:HomeComponent},
] */

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
    BtnEditarComponent,
    BtnEliminarComponent,
    AcercaDeModalComponent,
    HeaderModalComponent,
    FotoPerfilModalComponent,
    BtnAgregarComponent,
    ExperienciaModalComponent,
    EducacionModalComponent,
    ProyectosModalComponent,
    SkillsModalComponent,
    FooterComponent,
    ProyectosImagenesModalComponent,
    PageErrorComponent,

    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* RouterModule.forRoot(appRoutes), */
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
    FormsModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({
      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#004080",
      innerStrokeColor: "#80ffff",
      animationDuration: 300,
      titleFontSize: "45",
      showSubtitle: false,
      responsive: true
      
    }),
    HttpClientModule,
    NgxScrollTopModule,
    DragDropModule,
    
   
    
  ],
  providers: [LoginServiceService, DatosPorfolioService, ModalServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [AcercaDeModalComponent, HeaderModalComponent, FotoPerfilModalComponent,ExperienciaModalComponent, EducacionModalComponent, ProyectosModalComponent, SkillsModalComponent, ProyectosImagenesModalComponent]
  
})
export class AppModule { }
