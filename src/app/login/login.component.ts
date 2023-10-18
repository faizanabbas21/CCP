import { Component, OnInit } from '@angular/core'; // Import OnInit

import { NgForm } from '@angular/forms';
import { LoginService } from '../services/user-data.service';
import { HttpClient } from '@angular/common/http'
import { Router, NavigationExtras  } from '@angular/router';
import { UserDataService } from '../services/data.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: any;
  token = null;

  constructor(
    private userData: LoginService ,
    private http: HttpClient,
    private router:Router,
    private UserdataService: UserDataService)
     {

  }

  ngOnInit() {}

  Username:any
  Password:any


  logout(){
    this.userData.logout();
    this.token = null;
    this.router.navigate(['/login']);
  }


  getCallBackTracking(event:any) {
    console.warn('formValues',event);

    let param = {
      CommData: {
        SourceLogin: 4
      },
      LoginData: {
        PATIENTNO:event.Username,
         Password: event.Password,
         ProjectType: "ForPanel",
         LogVia: 4
        }
    };

    console.log(param)
    this.userData.login(param ).subscribe({

      next: (res: any) => {
        console.log('data', res);
        let abc = JSON.parse(res.payLoad)
        console.log(abc)

        if( res.statusCode == 200 && abc[0].Verify==1)
        {
          let tableData = JSON.parse(res.payLoad)
          console.log(tableData)


        if(tableData && tableData[0].token){
          this.userData.setToken(tableData[0].token)
        }
        this.UserdataService.setTableData(tableData);

        const queryParams = { data: JSON.stringify(tableData) };
          this.router.navigate(['b2b/userprofile'], { queryParams });
        }else{
          alert("Invalid Password")
        }

      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('There are no more actions happening.');
      },
    });
  }



  userLogin(data:any){
    console.log(data)
    this.userLogin(data)
  }

  getData(data: NgForm) {
    console.log(data);
  }
}
// function logout() {
//   throw new Error('Function not implemented.');
// }

