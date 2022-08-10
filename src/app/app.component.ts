import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  isLoggedIn$: Observable<boolean> = this.auth.isLoggedIn();

  constructor(private auth: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.auth.getUsers();
  }

  login() {
    this.auth
      .loginUser()
      .subscribe((resopne: Token) => this.auth.logInWithToken(resopne));
  }

  logout() {
    this.auth.logOut();
  }
}
