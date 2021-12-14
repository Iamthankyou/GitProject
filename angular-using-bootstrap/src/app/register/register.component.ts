import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  [x: string]: any;
  constructor() {}

  ngOnInit(): void {}

  states = [
    { name: 'Arizona' },
    { name: 'California' },
    { name: 'Colorado' },
    { name: 'New York' },
    { name: 'Pennsylvania' },
  ];

  matchValidator(
    matchTo: string, 
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl): 
    ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return null;
    };
  }
  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    repassword: new FormControl('', [Validators.required, this.matchValidator('password', false)]),
    country: new FormControl(this.states,[Validators.required]),
    age: new FormControl(''),
    gender: new FormControl('',[Validators.required,]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')]),
  });

  get f() { return this.profileForm.controls; }

}
