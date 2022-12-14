import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, EMPTY, Observable, retry, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StoreService } from 'src/app/services/store.service';
import { CategoryComponent } from 'src/app/components/category/category.component';

@Component({
  selector: 'app-categories',
  template: `
    <button mat-stroked-button color="primary" (click)="showCategories()">
      Show categories
    </button>

    <mat-list *ngIf="categories$ | async as categories">
      <mat-list-item
        *ngFor="let category of categories"
        (click)="openCategory(category)"
      >
        {{ category }}
      </mat-list-item>
    </mat-list>
    <mat-spinner *ngIf="checkIfClick" diameter="25"></mat-spinner>
  `,
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Input() isLoggedIn$!: Observable<boolean>;
  categories$!: Observable<string[]>;
  checkIfClick: boolean = false;

  constructor(
    private service: StoreService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  showCategories() {
    this.checkIfClick = true;
    this.categories$ = this.service.getAllCategories().pipe(
      tap(() => (this.checkIfClick = false)),
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
