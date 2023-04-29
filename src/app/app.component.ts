import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'schedule-app';
  value: any;
  currentUser$: Observable<User | null> = of(null);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem(`user:token`)
    })
  };

  constructor(private http: HttpClient,  public accountService: AccountService) { }

  ngOnInit(): void {
    this.getAvailableTimes();
    this.setCurrentUser();
  }

  

  getAvailableTimes() {
    this.accountService.getAvailableTimes().subscribe({
      next: response => this.value = response,
      error: error => console.log(error),
      complete: () => console.log('Response received')
    });
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);  
    this.accountService.setCurrentUser(user);
  }

}
