
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated = false;
  constructor(private http: HttpClient, ) { }

  getLoginDataToPostSrvForUpd(CommData: any) {
    console.log("service",CommData)
    return this.http.post('https://stgapi.metacubes.net/p/PPLogin/CheckOTPAndLoginV2', CommData, this.getServerCallOptions());
  }

  login(data:any){

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM2NDQ1NzMsImlzcyI6ImhlbGxvLmJlbGxvLmlzc3VlciIsImF1ZCI6ImhlbGxvLmJlbGxvLmF1ZGllbmNlIn0.xRcfA57S2pXvDC0zOyuhU-e1FHifiABK0tL1Tjq8ezk';

    // Create headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post("https://stgapi.metacubes.net/p/api/PPLogin/CheckOTPAndLoginV2",data, { headers })

  }


  logout() {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }


  getServerCallOptions(): object {
    return {
      headers: this.getCommonHeaders(),
      responseType: "json"
    }
  }
  getCommonHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
}
