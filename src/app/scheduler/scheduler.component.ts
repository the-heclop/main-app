import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, Timestamp, of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  currentUser$: Observable<User | null> = of(null);
  selectedItems: any;
  times: any;
  eventForm = new FormGroup({
    reason: new FormControl(''),
    description: new FormControl(''),
    start: new FormControl(''),
  });


constructor(private http: HttpClient,  public accountService: AccountService, private router: Router) {
}

ngOnInit(): void {
  this.getAvailableTimes();
}

getAvailableTimes() {
  this.accountService.getAvailableTimes().subscribe({
    next: (response: any) => {
      this.times = response;
    }
  });
}


scheduleEvent() {
  this.accountService.scheduleEvent(this.eventForm.value).subscribe({
    next: (response: any) => {
      console.log(response);
      console.log(this.eventForm.value);
      alert('Event Scheduled');
      this.router.navigate(['/home']);
    }

  });

}

}
