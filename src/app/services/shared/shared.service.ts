import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Districts } from 'src/app/models/districts.model';
import { Picture } from 'src/app/models/picture.model';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:44339/api';

  // select image
  onUpLoad(filesSelected: any) {
    const fileData = new FormData();
    for (var i = 0; i < filesSelected.length; i++) {
      fileData.append('image', filesSelected[i], filesSelected[i].name);
    }
    return this.http.post(this.baseUrl + '/Pictures/SaveFile', fileData)
  }

  // USER
  onRegister(user: User) {
    return this.http.post(this.baseUrl + '/Userrs', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/Userrs')
  }
  // END USER


  // GET ALL PROVINCES
  getProvince():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + '/Provinces')
  }

  getDistricts(prvID: number):Observable<Districts[]>{
    return this.http.get<Districts[]>(this.baseUrl + '/Districts/prvID=prvID?prvID=' + prvID)
  } // END ADDRESS


  // PICTURES
  postPictures(picture: Picture) {
    return this.http.post(this.baseUrl + '/Pictures', picture)
  }

  //POST PRODUCT
  postProduct(product: Product) {
    return this.http.post(this.baseUrl + '/Products', product)
  }


  // CATEGORIES
  getCategories():Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/Categories');
  }
}
