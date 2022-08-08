import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { User } from 'src/app/User';

@Component({
  selector: 'app-users',
  template: `<button (click)="login()">login</button>
    <h1>Users:</h1>
    <ul *ngFor="let user of users">
      <li>{{ user.name.firstname }}</li>
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
    this.userService.loginUser().subscribe();
  }
}
