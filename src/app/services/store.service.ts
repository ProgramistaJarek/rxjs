import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../utilities/Product';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/categories`);
  }

  getOneCategory(category: string) {
    return this.http.get<Product>(`${this.url}/category/${category}`);
  }
}
