import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StoreService } from 'src/app/services/store.service';
import { CategoryComponent } from 'src/app/features/category/category.component';
import { catchError, map, Observable } from 'rxjs';

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

  constructor(private service: StoreService, private dialog: MatDialog) {}

  showCategories() {
    this.categories$ = this.service.getAllCategories();
  }

  openCategory(category: string) {
    this.dialog.open(CategoryComponent, {
      data: {
        products: this.service.getOneCategory(category),
      },
    });
  }
}
