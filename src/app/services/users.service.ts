import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { User } from '../utilities/User';
import { Token } from '../utilities/Token';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://fakestoreapi.com/users';

  token!: Token;
  logger = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  loginUser(): Observable<Token> {
    return this.http.post<Token>('https://fakestoreapi.com/auth/login', {
      username: 'hopkins',
      password: 'William56$hj',
    });
  }

  logInWithToken(tokenValue: Token) {
    localStorage.setItem('token', tokenValue.token);
    this.logger.next(true);
  }

  logOut() {
    localStorage.removeItem('token');
    this.logger.next(false);
  }
}
