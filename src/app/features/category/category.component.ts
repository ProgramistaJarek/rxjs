import { Component, OnInit, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';

import { Product } from 'src/app/utilities/Product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-category',
  template: `
    <div *ngIf="observable$ | async as product">
      <div *ngFor="let item of product">
        <p>title: {{ item.title }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  observable$!: Observable<Product[]>;

  constructor(
    @Inject(DIALOG_DATA) public data: { categoryName: string },
    private service: StoreService
  ) {}

  ngOnInit(): void {
    this.service
      .getOneCategory(this.data.categoryName)
      .subscribe((respone: any) => (this.observable$ = respone));
  }

  test() {
    console.log(this.observable$);
  }
}
