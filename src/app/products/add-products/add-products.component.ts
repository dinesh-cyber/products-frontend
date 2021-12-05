import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClients } from 'src/app/core/http.service';
import { SessionService } from 'src/app/core/session.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.services';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  ProductForm:FormGroup
  public eResponse = {};
  constructor(
    private httpClient: HttpClients, 
    private constService: ApiService, 
    private fb:FormBuilder, 
    private session:SessionService,
    private router: Router, 
  ) {}

  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      title:["", Validators.required],
      description:[""],
      price:["", Validators.required],
      image:["", Validators.required],
      publish:[true, Validators.required],
    })
  }

  handleFile(files: File[]){
    console.log(files[0])
    this.ProductForm.patchValue({
      image:files[0]
    })
  }

  public addProduct(){
    console.log(this.ProductForm.value)
    this.httpClient.postAttachment(this.constService.products, this.ProductForm.value)
    .then(res => {
      this.router.navigate(["/products"])
    }).catch(err => {
        this.eResponse = err;
    }).finally(() => {
    });
  }

}
