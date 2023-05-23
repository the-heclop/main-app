import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isLoading = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService, private router: Router ) { }

  ngOnInit(): void {
  }

  login() {
      this.isLoading = true;
      this.accountService.login(this.loginForm.value).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        error: () => {
        this.isLoading = false;
        alert('Login Failed');
        }
      })
    }

    logout() {
      this.accountService.logout();
      this.loginForm.reset();
      this.router.navigate(['/home']);
    }

  }





