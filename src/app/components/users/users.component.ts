import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/utilities/User';
import { Token } from 'src/app/utilities/Token';

@Component({
  selector: 'app-users',
  template: `<button mat-stroked-button color="primary" (click)="login()">
      login
    </button>
    <h1>Users:</h1>
    <div *ngIf="users$ | async as users">
      <ul *ngFor="let user of users">
        <li>
          {{ user.name.firstname | titlecase }}
          {{ user.name.lastname | titlecase }}
        </li>
      </ul>
    </div> `,
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  login() {
    this.userService
      .loginUser()
      .pipe(
        catchError((err) => {
          throw 'tu byl error' + err;
        })
      )
      .subscribe((resopne: Token) => this.userService.setToken(resopne));
  }
}
