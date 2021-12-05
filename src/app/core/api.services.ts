import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private API_URL = 'http://localhost:8000/api/';
	public login: string = `${this.API_URL}login/`;
    public register: string = `${this.API_URL}register/`;

    public products: string = `${this.API_URL}products/`;
    public product: string = `${this.API_URL}product/`;

}