import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';

import { Product } from 'src/app/utilities/Product';

@Component({
  selector: 'app-category',
  template: `
    <div *ngIf="data.products$ | async as products" class="product">
      <h1>Products</h1>
      <mat-dialog-content>
        <div *ngFor="let item of products" style="margin-bottom: 1.5rem">
          <h3 mat-dialog-title>{{ item.title }}</h3>
          <div class="card">
            <img mat-card-image [src]="item.image" width="64px" />
            <p mat-dialog-content>{{ item.description }}</p>
          </div>
        </div>
        <div mat-dialog-actions>
          <button mat-button mat-dialog-close>Close</button>
        </div>
      </mat-dialog-content>
    </div>
  `,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: { products$: Observable<Product[]> }
  ) {}
}
