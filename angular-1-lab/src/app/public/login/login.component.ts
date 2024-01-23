import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services';
import { UserModel } from '../../shared/models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, NgIf, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  regexPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  regexNumberpattern = /^[0-9]+$/
  myForm!:FormGroup;
  eventLogin$!: Subscription;

  constructor(private authService: AuthService){
    this.myForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.regexPattern) ]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.regexNumberpattern)])
    })

  }

 onSubmit(): void{
  console.log('this.form', this.myForm.value)
  if(!this.myForm.valid){
    return;
  }
  
  const user:UserModel = {
    username: (this.myForm.controls['userName'].value).trim(),
    password: (this.myForm.controls['password'].value).trim()
  }
   this.authService.login(user);
 }
}
