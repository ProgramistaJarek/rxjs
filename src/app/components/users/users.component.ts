import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/utilities/User';

@Component({
  selector: 'app-users',
  template: `
    <button
      *ngIf="!(isLoggedIn$ | async)"
      mat-stroked-button
      color="primary"
      (click)="onLogin()"
    >
      login
    </button>
    <button
      *ngIf="isLoggedIn$ | async"
      mat-stroked-button
      color="warn"
      (click)="onLogout()"
    >
      logout
    </button>

    <div *ngIf="users$ | async as users; else loader">
      <h1>Users:</h1>
      <ul *ngFor="let user of users">
        <li>
          {{ user.name.firstname | titlecase }}
          {{ user.name.lastname | titlecase }}
        </li>
      </ul>
    </div>
    <ng-template #loader><mat-spinner diameter="25"></mat-spinner></ng-template>
  `,
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() users$!: Observable<User[]>;
  @Input() isLoggedIn$!: Observable<boolean>;
  @Output() onLoginUser = new EventEmitter();
  @Output() onLogoutUser = new EventEmitter();

  constructor() {}

  onLogin() {
    this.onLoginUser.emit();
  }

  onLogout() {
    this.onLogoutUser.emit();
  }
}
