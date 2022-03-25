import { Component, Input, OnInit, } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-acerca-de-modal',
  templateUrl: './acerca-de-modal.component.html',
  styleUrls: ['./acerca-de-modal.component.css']
})

export class AcercaDeModalComponent implements OnInit {

  @Input() datos:any;
  @Input() my_modal_title: any;
  @Input() my_modal_content: any;


 

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  closeResult: string = ''
  /* 
 open(content:any) {
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
} 

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
} */


  ngOnInit(): void {
    console.log(this.datos)
  }

}
