import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { StoreService } from 'src/app/services/store.service';
import { CategoryComponent } from 'src/app/features/category/category.component';

@Component({
  selector: 'app-categories',
  template: `
    <button mat-stroked-button color="primary" (click)="showCategories()">
      Show categories
    </button>
    <ul *ngIf="categories">
      <li *ngFor="let category of categories" (click)="openCategory(category)">
        {{ category }}
      </li>
    </ul>
  `,
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories!: string[];
  constructor(private service: StoreService, private dialog: Dialog) {}

  ngOnInit(): void {}

  showCategories() {
    this.service.getAllCategories().subscribe((result: string[]) => {
      this.categories = result;
    });
  }

  openCategory(category: string) {
    const dialogRef = this.dialog.open(CategoryComponent, {
      data: { categoryName: category },
    });
  }
}
