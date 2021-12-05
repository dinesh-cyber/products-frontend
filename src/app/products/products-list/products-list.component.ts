import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.services';
import { HttpClients } from 'src/app/core/http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products: any
  public eResponse: {}
  constructor(private httpClient: HttpClients, private constService: ApiService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts(){
    this.httpClient.get(this.constService.products)
    .then(res => {
      console.log(res)
    }).catch(err => {
        this.eResponse = err;
    }).finally(() => {
    });
  }

}
