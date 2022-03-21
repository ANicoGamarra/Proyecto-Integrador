import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})
export class HeaderModalComponent implements OnInit {
  form!: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<HeaderModalComponent>,
      @Inject(MAT_DIALOG_DATA) data:any) {

      this.description = data.description;
  }

  
  ngOnInit() {
      this.form = this.fb.group({
          description: [this.description, []],
          
      });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
