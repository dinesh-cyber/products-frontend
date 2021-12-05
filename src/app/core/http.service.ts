import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiService } from './api.services';

import { throwError, ObservableInput, Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";


@Injectable({
	providedIn: 'root'
})
export class HttpClients {
    constructor(private http: HttpClient, private env:ApiService) {}

    private handleError(error: HttpErrorResponse): ObservableInput<ErrorEvent> {
		console.log(error);
		if (error.error instanceof ErrorEvent) {
			// Handler network error
			console.log(error.message);
			retry(2);
		} else {
			console.log(error.status);
			return throwError(error.error);
		}
		return throwError(error.message);
	}

    private changeToFormData(body: any, file?: File) {
		let formData = new FormData();
		Object.keys(body).forEach(k => {
			formData.append(k, body[k]);
		});
		if (file != null ) {
			formData.append('attachment', file);
		}
		return formData;
	}

    public get(url: string, options: any = {}): Promise<any> {
		return this.http.get(url, options).pipe(catchError(this.handleError)).toPromise();
	}

    public post(url: string, body: any, options: any = {}): Promise<any> {
		return this.http.post(url, body, options).pipe(catchError(this.handleError)).toPromise();
	}

    public postAttachment(url: string, body: any, options: any = {}, attachment?: File): Promise<any> {
		return this.http.post(url, this.changeToFormData(body, attachment), options).pipe(catchError(this.handleError)).toPromise();
	}

    public put(url: string, body: any, options: any = {}, attachment?: File): Promise<any> {
		return this.http.put(url, this.changeToFormData(body, attachment), options).pipe(catchError(this.handleError)).toPromise();
	}
}