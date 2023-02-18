import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  // prettier-ignore
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.startsWith('https://viacep')){
      return next.handle(request);
    }
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();

      request = request.clone({
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
