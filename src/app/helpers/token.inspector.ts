import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let data = JSON.parse(localStorage.getItem("user"));
        if (data) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Token ${data.token}`
                }
            });
        }

        return next.handle(request);
    }
}