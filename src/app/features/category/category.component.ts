import { Component, OnInit, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

import { Category } from 'src/app/utilities/Category';

@Component({
  selector: 'app-category',
  template: ` <p>category works!</p> `,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category!: Category;

  constructor(@Inject(DIALOG_DATA) public data: { item: any }) {}

  ngOnInit(): void {
    this.data.item.subscribe();
  }
}
