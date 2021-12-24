import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Category[]> {
    // console.log(API_URL + '/api/product-category');
    // console.log(this.http.get<ProductCategory>(API_URL + '/api/product-category/1'));
    return this.http.get<GetResponseProductCategory>(API_URL + '/api/product-category').pipe(
      map(reponse => reponse._embedded.productCategory)
    );
  }

  saveCategory(category): Observable<Category> {
    // tslint:disable-next-line:no-unused-expression
    // return null;
    console.log('Save category');
    return this.http.post<Category>(API_URL + '/api/product-category', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/api/product-category/${id}`).pipe(
      map(reponse => reponse)
    );
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    console.log(JSON.stringify(category));
    return this.http.put<Category>(`${API_URL}/api/product-category/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/api/product-category/${id}`);
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: Category[]
  };
}

