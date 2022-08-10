import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private userService: UsersService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = request.clone({
        setHeaders: { AuthorizationToken: token },
      });
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
