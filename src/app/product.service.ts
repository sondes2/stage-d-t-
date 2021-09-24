import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import   {Form} from "./model/form.model";
import {catchError, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL: string = 'http://localhost:3636/api';
  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3636/api/products');
  }

  deleteProduct(id): Observable<any> {
    // tslint:disable-next-line:no-console
    console.log(`http://localhost:3636/api/products/delete/${id}`);
    return this.httpClient.delete<{ message?: string, status: string }>(`http://localhost:3636/api/products/delete/${id}`)
      .pipe(switchMap(async (data) => {
          const prods = await this.getAllProducts().toPromise();
          return {
            ...data,
            ...prods
          };
        })
      );
  }

  /*AddProduct(product: any): Observable<any> {
    let newProduct = {"cat_id": 1,
                      "description": "aaa"}
    return this.httpClient.post(endpoint + 'products', product).pipe(
      catchError(this)
    );
  }*/
 AddProduct(bodyInput) {
    const endpoint = 'http://localhost:3636/api/products/new/'
    return this.httpClient.post(endpoint, bodyInput)
  }
 /*AddProduct(form: Form): Observable<Form> {
    return this.httpClient.post<Form>(
      this.apiURL + '/products/new/',form);
  }*/
}
