import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {

  ACERCADE:any[] = [
    {nombre:"Nicolas", apellido:"Gamarra", titulo: "Full Stack Developer Jr.", descripcion:" Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias sint consectetur voluptates et sunt sed deleniti reiciendis dolorum, nam, voluptatum aspernatur quibusdam dolore aut reprehenderit ab amet esse eum!" , imgPerfil:"/assets/imagenes/perfil2.jpg", imgPortada:"assets/imagenes/portal-2.jpg"}
  ];
  
  EXPERIENCIA:any[] = [
    { empresa: "AAAA", puesto:"asdf", ingreso:1111, salida:2222, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoEmpresa:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { empresa: "BBBB", puesto:"qwre", ingreso:2222, salida:3333, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", logoEmpresa:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { empresa: "CCCC", puesto:"asdf", ingreso:3333, salida:4444, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoEmpresa: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  EDUCACION:any[] = [
    { instituto: "AAAA", titulo:"asdf", ingreso:1111, egreso:2222, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoInstituto:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { instituto: "BBBB", titulo:"qwre", ingreso:2222, egreso:3333, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", logoInstituto:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { instituto: "CCCC", titulo:"asdf", ingreso:3333, egreso:4444, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoInstituto:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  PROYECTOS:any[] = [
    { nombre: "AAAA", fecha:1111, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", link:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { nombre: "BBBB", fecha:2222, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", link:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { nombre: "CCCC", fecha:3333, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", link: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  SKILLS:any[] = [
    { habilidad: "Dormir", porcentaje:20 },
    { habilidad: "Comer", porcentaje:90 },
    { habilidad: "Leer", porcentaje:70 },
    { habilidad: "Estudiar", porcentaje:85 },
    { habilidad: "Practicar", porcentaje:90 },
    { habilidad: "Tomar mate", porcentaje:99 },
    { habilidad: "Mirar series", porcentaje:25 },
    { habilidad: "Entrenar", porcentaje:10 },
  ];


  url="http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  getDatosPersona():Observable<any>{
    return this.http.get(this.url+"/personas/findAll");
  }

  getDatosExperiencia():Observable<any>{
    return this.http.get(this.url+"/experiencias/findAll");
  }

  getExperienciaById (id:number):Observable<any>{
    return this.http.get(this.url+"/experiencias/findById/"+id);
  }

  getDatosEducaciones():Observable<any>{
    return this.http.get(this.url+"/educaciones/findAll");
  }

  getDatosProyectos():Observable<any>{
    return this.http.get(this.url+"/proyectos/findAll");
  }

  getDatosSkills():Observable<any>{
    return this.http.get(this.url+"/skills/findAll");
  }
}
