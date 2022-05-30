import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Districts } from 'src/app/models/districts.model';
import { Product } from 'src/app/models/product.model';
import { Pictures } from 'src/app/models/pictures.model';
import { Messages } from 'src/app/models/messages.model';
import { Provinces } from 'src/app/models/provinces.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:44339/api';

  /// IMAGES
  // select image
  onUpLoad(filesSelected: any) {
    const fileData = new FormData();
    for (var i = 0; i < filesSelected.length; i++) {
      fileData.append('image', filesSelected[i], filesSelected[i].name);
    }
    return this.http.post(this.baseUrl + '/Pictures/SaveFile', fileData)
  }
  // get all img
  getImages(): Observable<Pictures[]> {
    return this.http.get<Pictures[]>(this.baseUrl + '/Pictures');
  }

  // USER
  onRegister(user: User) {
    return this.http.post(this.baseUrl + '/Userrs', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/Userrs')
  }

  getUserByID(id: number) {
    return this.http.get<User>(this.baseUrl + '/Userrs/' + id);
  }
  // END USER

  // GET ALL PROVINCES
  getProvince():Observable<Provinces[]>{
    return this.http.get<Provinces[]>(this.baseUrl + '/Provinces')
  }

  getDistricts(prvID: number):Observable<Districts[]>{
    return this.http.get<Districts[]>(this.baseUrl + '/Districts/prvID=prvID?prvID=' + prvID)
  } // END ADDRESS


  // PICTURES
  postPictures(picture: Pictures) {
    return this.http.post(this.baseUrl + '/Pictures', picture)
  }


  /// PRODUCTS
  // POST PRODUCT
  postProduct(product: Product) {
    return this.http.post(this.baseUrl + '/Products', product)
  }
  // GET PRODUCTS
  getProducts():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + '/Products')
  }
  // GET PRODUCT DETAIL
  getProductById(id: number) {
    return this.http.get<Product>(this.baseUrl + '/Products/' + id);
  }
  // GET PRODUCT BY userID
  getProductByUID(uid: number):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/Products/ByUserID?_userID=' + uid);
  }

  /// CATEGORIES
  getCategories():Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/Categories');
  }

  // MESSAGES
  sendMessage(message: Messages) {
    return this.http.post(this.baseUrl + '/Messages', message);
  }

  getMessages():Observable<Messages[]> {
    return this.http.get<Messages[]>(this.baseUrl + '/Messages');
  }

  // DISTRICTS
  getAllDistricts():Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/Districts');
  }
}
