import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm=this._fb.group({
      name: [''],
      password: ['']
    })
  }
  private login() {
    
  }
}
