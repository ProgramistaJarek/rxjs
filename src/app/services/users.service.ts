import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../utilities/User';
import { Observable } from 'rxjs';

export interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://fakestoreapi.com/users';
  token!: Token;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  loginUser() {
    return this.http.post<Token>('https://fakestoreapi.com/auth/login', {
      username: 'mor_2314',
      password: '83r5^_',
    });
  }

  setToken(tokenValue: Token) {
    this.token = tokenValue;
  }

  getAuthToken() {
    return this.token?.token;
  }
}
