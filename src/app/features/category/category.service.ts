import { Injectable } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  showCategory(categoryName: string) {
    console.log(categoryName);
  }
}
