import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.services';
import { HttpClients } from 'src/app/core/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any
  public eResponse: {}
  constructor(private httpClient: HttpClients, private constService: ApiService) {}

  ngOnInit(): void {
  }
}
