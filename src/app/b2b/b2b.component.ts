
import { Component } from '@angular/core';
import { LoginService } from '../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-b2b',
  templateUrl: './b2b.component.html',
  styleUrls: ['./b2b.component.css']
})
export class B2bComponent {


  panelList:any
  users: any;



  constructor(private userData: LoginService,
    private route: ActivatedRoute,
    private router:Router) {

  }
  ngOnInit(){


  }

  logout(data:any){

    this.userData.logout(); // Perform logout logic

    this.router.navigate(['/login']);
  }


}
