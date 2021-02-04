import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-pin',
  templateUrl: './register-pin.component.html',
  styleUrls: ['./register-pin.component.css']
})
export class RegisterPinComponent implements OnInit {

  pinForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    tel: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    country: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    pin: [null, Validators.compose([
      Validators.required, Validators.minLength(12), Validators.maxLength(14)])
    ],
    sn: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  public onSubmit(): void {
    alert('Thanks!');
  }

}
