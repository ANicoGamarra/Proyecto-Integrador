import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})
export class HeaderModalComponent implements OnInit {

  @Input() datos:any; 

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
