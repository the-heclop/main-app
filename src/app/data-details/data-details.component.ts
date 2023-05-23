import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../_services/data.service';
import { Package } from '../_models/package';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {
  packageArray: Package | any;

  ngOnInit(): void {
    this.data.packageIds$.subscribe((data) => {
      this.packageArray = data;
    });

    const routeParams = this.route.snapshot.paramMap;
    const packageIdFromRoute = routeParams.get('id');
    for (let i = 0; i < this.packageArray.length; i++) {
      if (this.packageArray[i].tracking_id === packageIdFromRoute) {
        this.packageArray = this.packageArray[i];
        break;
      }
    }

  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private data: DataService
  ) {}


  goBack(): void {
    this.location.back();
  }

}
