import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService ) { }

  ngOnInit(): void {
  }


  login() {

      this.accountService.login(this.loginForm.value).subscribe({
        next: response => {
          
        },
        error: error => alert('Invalid login')
      })
    }

    logout() {
      this.accountService.logout();
      this.loginForm.reset();
    }



  }





