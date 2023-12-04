import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    let expiresAt = localStorage.getItem('expiresAt');
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `${token}`),
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
