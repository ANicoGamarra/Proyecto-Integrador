import { Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { ModalServiceService } from 'src/app/servicios/modal-service.service';
import { ExperienciaModalComponent } from '../modal/experiencia-modal/experiencia-modal.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //@Input() actualizarVista!:boolean ;

  login:any;
  datosPorfolio:any;
  nuevo:boolean = true
  xps:any;
  componente:string = "experiencias";
  actualizarVista!:boolean 

  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService,  private modalService: NgbModal, private actualizarVistaServ:ModalServiceService ) { }

  ngOnInit(): void {
   

    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaExperiencia()
     
  }



  abrirModal(id:number){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });       
    modalRef.componentInstance.id = id;

    modalRef.result.then((data) => {
      this.actualizarVistaExperiencia();
    }, (reason) => {
      alert("no funciono")
    })


  }

  
  agregarExperiencia(){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });
    modalRef.componentInstance.expNueva = this.nuevo;
    modalRef.result.then((data) => {
      this.actualizarVistaExperiencia();
    }, (reason) => {
      alert("no funciono")
    })
    
    
  }

  eliminarExperiencia(id:number){
    
    this.datosDb.deleteDato(id, this.componente)
      .subscribe(() => {
        this.ngOnInit();
      });
      console.log(id)
  }

  actualizarVistaExperiencia(){
   
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
      //console.log(datos),  
      this.datosPorfolio = datos));
  }

  

}
