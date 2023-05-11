import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../_services/account.service';





@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.css']
})
export class DataDashboardComponent implements OnInit {
  accountData: any;
  trackIds = '';
  isHeaderHidden = false;
  tableHeaders = [
   {name: 'tracking_id'},
   {name: 'last_scan_location'},
   {name: 'order_number'},
   {name: 'destination'},
   {name: 'scan_time'},
  ];




  constructor(private router: Router, private dataLookUp: DataService, public accountService: AccountService) {
   }

  ngOnInit(): void {
  }


  getData() {
    let idArray = this.trackIds.split('\n');
    this.dataLookUp.getData(idArray).subscribe(response => {
      this.accountData = response;
      console.log(this.trackIds);
    });
  }



}
