import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Skill } from 'src/app/servicios/interfaces/Skill';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css']
})
export class SkillsModalComponent implements OnInit {
  
  @Input() datos:any;
  @Input() id:number | undefined;

  btnAgregarSkill: boolean= false;
  datosPorfolio: Skill [] = []
  componente:string = "skills";
  skill!:Skill;
  formularioSkill!: FormGroup;
  nuevaHab:any
  habilidadesForm!: FormGroup;
  skillsForm!: FormGroup;
  habilidadesNuevasForm: FormGroup

  constructor(public activeModal: NgbActiveModal, private datosDb:DatosPorfolioService, private formulario: FormBuilder, private fb:FormBuilder  ) {
        
    this.habilidadesNuevasForm = formulario.group({      //formulario para nueva skill
      habilidadNueva: [''],
      porcentajeNuevo: [''],     
      idTipoSkillNuevo:['']       
    })

    this.habilidadesForm = fb.group({                  //formulario de array 
        habilidades: this.fb.array([]) ,
      });  

  }

  ngOnInit(): void {    
    this.vistaTabla();   
  }

  toggleBtnAgregarSkills() {
    this.btnAgregarSkill = !this.btnAgregarSkill;
  }

  vistaTabla(){
  
    this.datosPorfolio.forEach((skill: Skill) => {  //recorre el array de skills y por cada skills la envia a la funcion armarTabla
      this.armarTabla(skill)
    });
  }

  armarTabla(skill: Skill){                                 //cada skill la envia al metodo que crea el formulario      
    this.habilidades.push(this.insertarHabilidad(skill));
  }

  insertarHabilidad(skill:Skill): FormGroup {             //por cada skill crea un formulario con los atributos del objeto skill
    return this.fb.group({
      id_skill: skill.id_skill,
      habilidad: skill.habilidad,
      porcentaje: skill.porcentaje,
      id_tipo_skill: skill.id_tipo_skill,
      id_persona: skill.id_persona,
    })
  }

  agregarSkill() {
    Swal.fire({
      title: '¿Desea agregar la habilidad?',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('¡Agregada!', '', 'success');
        this.agregarHabilidad();
      } 
    })
  }

  borrarSkill(id:number){
    const skill = this.recuperarHabilidad(id)
    
   
    Swal.fire({
      title: '¿Desea borrar la habilidad?',
      text: "No se podrá revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Borrada!',
          
          'success'
        );
       this.borrarHabilidad(skill.id_skill); 
      }
    })
  }


  agregarHabilidad(){       //tomo los datos del formulario para nuevas skill, los guarda en la variable y los envia al servicio
   
    this.nuevaHab = {habilidad:this.habilidadesNuevasForm.value.habilidadNueva, porcentaje:this.habilidadesNuevasForm.value.porcentajeNuevo, id_tipo_skill:this.habilidadesNuevasForm.value.idTipoSkillNuevo , id_persona:1}
    this.datosDb.agregar(this.nuevaHab, this.componente)
        .subscribe(nuevaHab => {
          this.activeModal.close();
        });
  }

  recuperarHabilidad(id:number){        //con el id del form array recupera los datos de esa skill
  
    return this.habilidades.at(id).value
 
  }
  
  get habilidades(): FormArray {
    return this.habilidadesForm.get('habilidades') as FormArray;
  }

  borrarHabilidad(id:number){
    this.datosDb.borrar(id, this.componente)
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  guardar(){
    this.datosDb.agregar(this.formularioSkill.value, this.componente)
      .subscribe(() => {
        this.activeModal.close();
      });
  }
 
  editarSkill(id: number) {                   //recibe un id creado por el form array y lo envia al servicio para recuperar esa skill
    const skill = this.recuperarHabilidad(id)
    Swal.fire({
      title: '¿Desea guardar los cambios?',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('¡Guardados!', '', 'success')
        this.guardarCambios(skill);
        
      } /*else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }*/
    })
    
  }

  guardarCambios(skill: Skill){     //guarda los cambios de la skill recuperada
   
    this.datosDb.editar(skill, this.componente)
        .subscribe(() => {
          this.activeModal.close();
        });
    
  } 

}