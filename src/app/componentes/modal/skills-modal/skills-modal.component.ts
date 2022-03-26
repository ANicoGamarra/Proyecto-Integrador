import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css']
})
export class SkillsModalComponent implements OnInit {

  @Input() datos:any;
  @Input() id:number | undefined;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
