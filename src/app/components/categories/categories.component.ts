import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StoreService } from 'src/app/services/store.service';
import { UsersService } from 'src/app/services/users.service';
import { CategoryComponent } from 'src/app/features/category/category.component';
import { Token } from 'src/app/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  template: `
    <button mat-stroked-button color="primary" (click)="showCategories()">
      Show categories
    </button>

    <mat-list *ngIf="categories">
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
  categories!: string[];

  constructor(
    private service: StoreService,
    private dialog: MatDialog,
    private userService: UsersService
  ) {}

  showCategories() {
    this.service.getAllCategories().subscribe((result: string[]) => {
      this.categories = result;
    });
  }

  openCategory(category: string) {
    this.dialog.open(CategoryComponent, {
      data: { products: this.service.getOneCategory(category) },
    });
  }
}
