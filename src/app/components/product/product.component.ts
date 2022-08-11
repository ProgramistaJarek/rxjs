import { Component, Input } from '@angular/core';

import { ProductDetails } from 'src/app/utilities/SearchingProducts';

@Component({
  selector: 'app-product',
  template: `
    <mat-card class="example-card">
      <mat-card-title-group>
        <mat-card-title>{{ item.title }}</mat-card-title>
        <mat-card-subtitle>{{ item.price }} &euro;</mat-card-subtitle>
        <img mat-card-sm-image [src]="item.thumbnail" />
      </mat-card-title-group>
      <mat-card-content>
        {{ item.description }}
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() item!: ProductDetails;

  constructor() {}
}
