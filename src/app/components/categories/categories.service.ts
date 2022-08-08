import { Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { CategoryComponent } from '../../features/category/category.component';
import { StoreService } from 'src/app/services/store.service';
import { Category } from 'src/app/utilities/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private dialog: Dialog, private store: StoreService) {}

  openDialog(name: string) {
    const dialogRef = this.dialog.open(CategoryComponent, {
      data: {
        item: this.store.getOneCategory(name),
      },
    });
  }
}
