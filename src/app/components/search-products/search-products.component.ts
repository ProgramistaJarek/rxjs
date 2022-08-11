import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {
  fromEvent,
  map,
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';

import { SearchProductsService } from 'src/app/services/search-products.service';
import { ProductInfo } from 'src/app/utilities/SearchingProducts';

@Component({
  selector: 'app-search-products',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Search product</mat-label>
      <input matInput type="text" #value />
    </mat-form-field>

    <div *ngIf="products$ | async as product" class="cards">
      <app-product
        *ngFor="let item of product.products"
        [item]="item"
      ></app-product>
    </div>
  `,
  styleUrls: ['./search-products.component.scss'],
})
export class SearchProductsComponent implements OnInit {
  @ViewChild('value', { static: true }) someInput!: ElementRef;
  products$!: Observable<ProductInfo>;

  constructor(private search: SearchProductsService) {}

  ngOnInit(): void {
    this.products$ = fromEvent(this.someInput.nativeElement, 'keyup').pipe(
      map((e: any) => {
        return e.target.value;
      }),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.search.searchProducts(value);
      })
    );
  }
}
