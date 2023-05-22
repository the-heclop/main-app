import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "https://landingpageang.azurewebsites.net/api/queries";

  constructor(private http: HttpClient) { }

  getData(trackIds: string[]){
    return this.http.post(this.baseUrl,trackIds);
  }


}
