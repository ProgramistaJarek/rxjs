import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';

import { Product } from 'src/app/utilities/Product';

@Component({
  selector: 'app-category',
  template: `
    <div
      *ngIf="data.products | async as products; else other_content"
      class="product"
    >
      <h1>Products</h1>
      <mat-dialog-content>
        <div *ngFor="let item of products">
          <h3 mat-dialog-title>{{ item.title }}</h3>
          <p mat-dialog-content>{{ item.description }}</p>
        </div>
        <div mat-dialog-actions>
          <button mat-button mat-dialog-close>Close</button>
        </div>
      </mat-dialog-content>
    </div>

    <ng-template #other_content><mat-spinner></mat-spinner></ng-template>
  `,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: { products: Observable<Product[]> }
  ) {}
}
