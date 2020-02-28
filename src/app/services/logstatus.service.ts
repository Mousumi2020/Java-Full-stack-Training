import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { HttpHeaders } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogstatusService {
  private status:boolean=false;

  httpOptions;
  public message:string="Login";
  constructor(private http:HttpClient) { }

  
  getStatus(){
    return this.status;
  }
  updateStatus(status:boolean):void{
    this.status=this.status;
  }
  login(data):Observable<object>{
    this.httpOptions={
      headers:new HttpHeaders({
        'content-Type': 'application/x-www-form-urlencoded',
        'Accept': '/application/json',
        'Authorization':"Basic " +btoa("fidelity:password")

              })
    }
    return this.http.post("http://localhost:8889/authorize/jwt",data,this.httpOptions);
  }
}
