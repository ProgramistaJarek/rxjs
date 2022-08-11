import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductInfo } from '../utilities/SearchingProducts';

@Injectable({
  providedIn: 'root',
})
export class SearchProductsService {
  url = 'https://dummyjson.com/products/search?q=';

  constructor(private http: HttpClient) {}

  searchProducts(result: string): Observable<ProductInfo> {
    return this.http.get<ProductInfo>(`${this.url}${result}`);
  }
}
