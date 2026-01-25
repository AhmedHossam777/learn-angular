import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsResponse} from './product.interfaces';


@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:8080/api/v1/products'

  getAll(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.apiUrl)
  }
}
