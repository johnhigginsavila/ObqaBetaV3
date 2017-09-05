import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

import { ISessionCreate } from '../../interfaces/session/session-create.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() submitloginData = new EventEmitter<ISessionCreate>();
  @Input() csrf: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      _csrf: new FormControl(this.csrf)
    })
  }

  ngOnChanges(changes: SimpleChanges ){
    if(changes['csrf']){
      this.loginForm.value._csrf = this.csrf;
    }
  }

  ngOnInit() {
    
  }

  onSubmit(): void{
    if(this.loginForm.valid){
      const email:string = this.loginForm.value.email;
      const password: string = this.loginForm.value.password;
      this.submitloginData.emit({
        email: email,
        password: password,
        _csrf: this.csrf
      });
    }else{
      alert("Invalid Form");
    }
    
  }

}
