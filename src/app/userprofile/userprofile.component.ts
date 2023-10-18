import { Component } from '@angular/core';
import { LoginService } from '../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../services/data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  panelList: any;
  userData: any;
  tableData: any;

  constructor(private route: ActivatedRoute, private userDataService: UserDataService) {}

  ngOnInit() {

    this.userDataService.tableData$.subscribe((tableData) => {
      if (tableData) {
        this.panelList = tableData;
      }
    });


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

