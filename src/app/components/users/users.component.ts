import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

import { User } from 'src/app/utilities/User';
import { Token } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  template: `<button mat-stroked-button color="primary" (click)="login()">
      login
    </button>
    <h1>Users:</h1>
    <ul *ngFor="let user of users">
      <li>
        {{ user.name.firstname | titlecase }}
        {{ user.name.lastname | titlecase }}
      </li>
    </ul>`,
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }

  login() {
    this.userService
      .loginUser()
      .subscribe((resopne: Token) => this.userService.setToken(resopne));
  }
}
