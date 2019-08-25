import { Observable } from 'rxjs';

export interface DataService<T> {

  getProducts(): Observable<T[]>;
  
  getProduct(id: number): Observable<T>;

  createProduct(product: T): Observable<T> ;

  deleteProduct(id: number): Observable<{}>;

  updateProduct(product: T): Observable<T>
}
