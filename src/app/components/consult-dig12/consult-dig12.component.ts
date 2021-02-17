import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-consult-dig12',
  templateUrl: './consult-dig12.component.html',
  styleUrls: ['./consult-dig12.component.css']
})
export class ConsultDig12Component implements OnInit {

  pinForm = new FormGroup({
    pin: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.pinForm.invalid) { return; }
    console.log(this.pinForm.value);
  }

}
