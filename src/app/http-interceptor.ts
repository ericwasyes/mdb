import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TieInterceptor implements HttpInterceptor {
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({params: req.params.append("api_key", this.apiKey)});
        return next.handle(authReq);
    }
}