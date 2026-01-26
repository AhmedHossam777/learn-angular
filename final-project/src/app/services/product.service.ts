import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsResponse, OneProductResponse} from './product.interfaces';


@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:8080/api/v1/products'

  getAll(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.apiUrl)
  }

  getOne(id: string | null): Observable<OneProductResponse> {
    return this.http.get<OneProductResponse>(`${this.apiUrl}/${id}`)
  }

  deleteOne(id: string | null): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      observe: 'response',
      responseType: 'text'
    })
  }
}
