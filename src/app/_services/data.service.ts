import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // baseUrl = "https://landingpageang.azurewebsites.net/api/queries";
  baseUrl = "https://localhost:7226/api/queries";


  private dataArraySubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public packageIds$: Observable<any[]> = this.dataArraySubject.asObservable();

  constructor(private http: HttpClient) { }

  packageIdArray(packageIds: any[]) {
    this.dataArraySubject.next(packageIds);
  }

  getData(trackIds: any[]){
    return this.http.post<any[]>(this.baseUrl,trackIds)
    }

  }


