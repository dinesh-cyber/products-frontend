import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.services';
import { HttpClients } from 'src/app/core/http.service';
import { SessionService } from 'src/app/core/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  public eResponse = {};
  constructor(
    private httpClient: HttpClients, 
    private constService: ApiService, 
    private fb:FormBuilder, 
    private session:SessionService,
    private router: Router, 
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:["", Validators.required],
      password:["", Validators.required]
    })
  }

  public login(){
    this.eResponse = {};
    if(this.loginForm.invalid){
      console.log("error")
      return
    }
    this.httpClient.post(this.constService.login, this.loginForm.value)
      .then(res => {
        this.session.setSession(true, res)
        this.router.navigate(["/products"])
      }).catch(err => {
          this.eResponse = err;
      }).finally(() => {
      });
  }
}

