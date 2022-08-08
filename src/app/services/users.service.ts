import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { User } from '../utilities/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://fakestoreapi.com/users';
  token!: any;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  loginUser() {
    return this.http
      .post('https://fakestoreapi.com/auth/login', {
        username: 'mor_2314',
        password: '83r5^_',
      })
      .pipe(
        tap((e) => {
          console.log(e);
        })
      );
  }
}
