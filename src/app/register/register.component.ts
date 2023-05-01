import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm = new FormGroup({
  email: new FormControl(''),
  username: new FormControl(''),
  passwordHash: new FormControl(''),
  confirmPassword: new FormControl('')
});


constructor(public accountService: AccountService, private router: Router) { }

ngOnInit(): void {
  
}
registerNewUser() {
  this.accountService.registerNewUser(this.registerForm.value).subscribe(response => {
    console.log(response);
  }, error => {
    console.log(error);

  }
  )}


cancelRegister() {
  this.registerForm.reset();
}

}
