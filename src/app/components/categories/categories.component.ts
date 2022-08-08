import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  template: `
    <h1>Categories:</h1>
    <ul *ngFor="let category of categories">
      <li (click)="showCategory(category)">{{ category }}</li>
    </ul>
  `,
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories!: string[];

  constructor(
    private store: StoreService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.store.getAllCategories().subscribe((response: string[]) => {
      this.categories = response;
    });
  }

  showCategory(name: string) {
    this.categoryService.openDialog(name);
  }
}
