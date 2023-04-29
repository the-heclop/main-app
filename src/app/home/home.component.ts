import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode = false;
currentUser$: Observable<User | null> = of(null);

constructor(public accountService: AccountService ) { }



  ngOnInit(): void {}

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
    
}
