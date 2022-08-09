import { Component, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { UsersService } from './services/users.service';
import { User } from './utilities/User';
import { Token } from './utilities/Token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  users$!: Observable<User[]>;

  constructor(private auth: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.auth.getUsers();
  }

  login() {
    this.auth
      .loginUser()
      .pipe(
        catchError((err) => {
          throw 'tu byl error' + err;
        })
      )
      .subscribe((resopne: Token) => this.auth.setToken(resopne));
  }
}
