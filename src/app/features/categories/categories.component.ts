import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, EMPTY, Observable, retry, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StoreService } from 'src/app/services/store.service';
import { UsersService } from 'src/app/services/users.service';
import { CategoryComponent } from 'src/app/components/category/category.component';

@Component({
  selector: 'app-categories',
  template: `
    <button
      *ngIf="isLoggedIn$ | async"
      mat-stroked-button
      color="primary"
      (click)="showCategories()"
    >
      Show categories
    </button>

    <mat-list
      *ngIf="(isLoggedIn$ | async) && (categories$ | async) as categories"
    >
      <mat-list-item
        *ngFor="let category of categories"
        (click)="openCategory(category)"
        class="mat-list-item"
      >
        {{ category }}
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories$!: Observable<string[]>;
  isLoggedIn$: Observable<boolean> = this.auth.isLoggedIn();

  constructor(
    private service: StoreService,
    private auth: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  showCategories() {
    this.categories$ = this.service.getAllCategories().pipe(
      catchError((err, caught) => {
        return this.errorHandling(caught);
      })
    );
  }

  openCategory(category: string) {
    this.dialog.open(CategoryComponent, {
      data: {
        products$: this.service.getOneCategory(category).pipe(
          catchError((err, caught) => {
            return this.errorHandling(caught);
          })
        ),
      },
    });
  }

  errorHandling(caught: Observable<any>) {
    const snackRef = this.snackBar.open('Napraw se internet', 'dziala?');

    return snackRef.afterDismissed().pipe(
      switchMap((info) => {
        if (info.dismissedByAction === true) {
          return caught.pipe(retry());
        }
        return EMPTY;
      })
    );
  }
}
