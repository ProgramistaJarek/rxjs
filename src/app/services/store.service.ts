import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../utilities/Category';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/categories`);
  }

  getOneCategory(category: string): Observable<Category> {
    return this.http.get<Category>(`${this.url}/category/${category}`);
  }
}
