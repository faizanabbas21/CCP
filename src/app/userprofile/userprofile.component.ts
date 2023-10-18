import { Component } from '@angular/core';
import { LoginService } from '../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  panelList: any;
  userData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const data = this.route.snapshot.queryParamMap.get('data');

    if (data) {
      // Parse the data if needed
      const tableData = JSON.parse(data);
      console.log("tableData",tableData);
      this.panelList = tableData

    }

    this.panelList = this.panelList


  }
}

