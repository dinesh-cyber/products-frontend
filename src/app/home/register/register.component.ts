import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.services';
import { HttpClients } from 'src/app/core/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup
  public eResponse = {};
  constructor(private httpClient: HttpClients, private constService: ApiService, private fb:FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      user_type:["",Validators.required],
      username:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      phone:["", Validators.required],
      password:["", Validators.required],
    })
  }

  public signup(): void {
    this.eResponse = {};
    if(this.registerForm.invalid){
      console.log("error")
      return
    }
    this.httpClient.post(this.constService.register, this.registerForm.value)
      .then(res => {
        console.log(res)
      }).catch(err => {
          this.eResponse = err;
      }).finally(() => {
      });
  }

}
