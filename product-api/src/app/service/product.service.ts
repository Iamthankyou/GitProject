import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {ProductCategory} from '../model/product-category';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getAll().subscribe(product => this.products = product);
  }

  getAll(): Observable<Product[]> {
    console.log(API_URL + '/api/products');
    console.log(this.http.get<GetResponseProduct>(API_URL + '/api/products'));
    return this.http.get<GetResponseProduct>(API_URL + '/api/products').pipe(
      map(reponse => reponse.data)
    );
  }


  saveProduct(product): Subscription {
    // tslint:disable-next-line:no-unused-expression
    // return null;
    console.log('Save category');
    console.log(JSON.stringify(product));
    return this.http.post<Product>(API_URL + '/api/products', product).subscribe(()=>console.log('Saved'));
  }

  findById(id: string): Observable<Product> {
    return this.http.get<GetResponseSingleProduct>(`${API_URL}/api/products/${id}`).pipe(
      map(reponse => reponse.data)
    );
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    console.log(JSON.stringify(product));
    return this.http.put<Product>(`${API_URL}/api/products/${id}`, product);
  }

  deleteProduct(id: string): Subscription {
    console.log('Detete product id : ' + id);
    console.log(JSON.stringify(this.http.delete<Product>(`${API_URL}/api/products/${id}`)));
    return this.http.delete<Product>(`${API_URL}/api/products/${id}`).subscribe(() => console.log('user deleted'));
  }
}

interface GetResponseSingleProduct {
  data: Product;
}

interface GetResponseProduct {
  data: Product[];
}

