import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  onUpLoad(filesSelected: any) {
    const fileData = new FormData();
    for (var i = 0; i < filesSelected.length; i++) {
      fileData.append('image', filesSelected[i], filesSelected[i].name);
    }

    return this.http.post('https://localhost:44353/api/Products/SaveFile', fileData)
  }
}
