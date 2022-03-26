import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {

  @Input() datos:any;
  @Input() id:number | undefined;

  indice:any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.id)

    console.log(this.datos)
  }

}
