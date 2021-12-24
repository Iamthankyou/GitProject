import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Category} from '../model/category';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<GetResponseProduct>(API_URL + '/api/products').pipe(
      map(x => x._embedded.products)
    );
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/api/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/api/products/${id}`);
  }

  updateProduct(id: number, product: Product): Subscription {
    console.log(JSON.stringify(product));
    return this.http.put<Product>(`${API_URL}/api/products/${id}`, product).subscribe(() => console.log('Updated'));
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/api/products/${id}`);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + `/api/products/${id}/category`);
  }

}


interface GetResponseProduct {
  _embedded: {
    products: Product[]
  };
}
