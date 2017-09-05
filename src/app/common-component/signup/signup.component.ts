import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

import { IUserNew } from '../../interfaces/user/user-new.interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() cancel = new EventEmitter<boolean> ();
  @Output() signupData = new EventEmitter<IUserNew>();
  @Input('csrf') _csrf: string;

  private signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
        firstname: new FormControl('',Validators.required),
        lastname: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',Validators.required),
        confirmation: new FormControl('',Validators.required),
        invitationCode: new FormControl('', Validators.required),
        _csrf: new FormControl(this._csrf)
    });
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
        firstname: new FormControl('',Validators.required),
        lastname: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',Validators.required),
        confirmation: new FormControl('',Validators.required),
        invitationCode: new FormControl('', Validators.required),
        _csrf: new FormControl(this._csrf)
    });
  }

  signupCancel(): void{
    this.cancel.emit(false);
  }

  onSubmit(): void{
      this.signupData.emit(this.signupForm.value);
  }

}                   
