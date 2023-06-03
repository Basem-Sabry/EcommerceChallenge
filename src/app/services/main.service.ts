import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public currentProduct: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public currentCategroy: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('role'));



  constructor(private http: HttpClient) { }
  public get currentProducts(): any {
    if(this.currentProduct) { return this.currentProduct.value }
  }
  public get currentCategroies(): any {
    if(this.currentCategroy) { return this.currentCategroy.value }
  }
  public get currentLoggedUser(): any {
    if(this.currentUser) { return this.currentUser.value }
  }
    //Admin
  getAllCategries() {
    return this.http.get(`${environment.endpoint}/products/categories`);

  }

  getAllProducts() {
    return this.http.get(`${environment.endpoint}/products`);
  }
  addProduct(req_body: any) {
    return this.http.post(`${environment.endpoint}/products`,req_body);

  }
  editProduct(req_body:any,id:any) {
    return this.http.put(`${environment.endpoint}/products/${id}`,req_body);

  }
  deleteProduct(id:any) {
    return this.http.delete(`${environment.endpoint}/products/${id}`);

  }
  //User
  cacheCategroies() {
    return this.http.get(`${environment.endpoint}/products/categories`).subscribe({
      next: (res: any) => {
        this.currentCategroy.next(res)
      }
    });

  }

  cacheProduct() {
    this.http.get(`${environment.endpoint}/products`).subscribe({
      next: (res: any) => {
        this.currentProduct.next(res)
      },
      complete: () => {
        return this.currentProducts;

      }
    });
  }
  getSingleProduct(id:any) {
    return this.http.get(`${environment.endpoint}/products/${id}`);

  }
}
