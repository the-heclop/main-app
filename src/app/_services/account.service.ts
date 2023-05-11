import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:7226/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  private user = {
    username: '',
    token: ''
  }

  constructor(private http: HttpClient) { }


  registerNewUser(registerForm: any) {

    return this.http.post(this.baseUrl + 'account/register', registerForm).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  login(loginForm: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', loginForm).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: User | null) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
    return this.user;
  }

  getAvailableTimes() {
    const user = this.getUser();
    const token = user.token;
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get(this.baseUrl + 'available-hour-blocks', {headers});
}

  scheduleEvent(eventForm: any) {
    return this.http.post(this.baseUrl + 'schedule', eventForm);
  }
}
