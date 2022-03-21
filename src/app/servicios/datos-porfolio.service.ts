import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {

  EXPERIENCIA:any[] = [
    { empresa: "AAAA", puesto:"asdf", ingreso:1111, egreso:2222, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", src:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { empresa: "BBBB", puesto:"qwre", ingreso:2222, egreso:3333, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", src:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { empresa: "CCCC", puesto:"asdf", ingreso:3333, egreso:4444, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", src: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  EDUCACION:any[] = [
    { instituto: "AAAA", titulo:"asdf", ingreso:1111, egreso:2222, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", src:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { instituto: "BBBB", titulo:"qwre", ingreso:2222, egreso:3333, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", src:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { instituto: "CCCC", titulo:"asdf", ingreso:3333, egreso:4444, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", src:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
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


  constructor() { }
}
