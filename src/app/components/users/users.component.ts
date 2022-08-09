import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/utilities/User';

@Component({
  selector: 'app-users',
  template: `<button mat-stroked-button color="primary" (click)="onLogin()">
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
export class UsersComponent {
  @Input() users$!: Observable<User[]>;
  @Output() onLoginUser = new EventEmitter();

  constructor() {}

  onLogin() {
    this.onLoginUser.emit();
  }
}
