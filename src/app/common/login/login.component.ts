import { Component, OnInit } from '@angular/core';
import { LogstatusService } from 'src/app/services/logstatus.service';
import {Router} from '@angular/router';

interface tokenstring{
  access_token:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
logStatus:boolean;
styleObj={margin:"150px",padding:"50px",height:"300px",width:"400px",
border:"3px solid darked",boxShadow:"5px,5px,10px gray"};

UserName:string;
Password:string;

  constructor(private ls:LogstatusService,private router:Router) {
    this.logStatus=this.ls.getStatus();
   }
   logUser(){
     let data="username=" +this.UserName+"&password="+this.Password+"&grant_type=password";
     console.log(data);
     this.ls.login(data).subscribe(
       (data:tokenstring)=>{
         localStorage.setItem("token",data.access_token);
         localStorage.setItem("username",this.UserName);
         this.router.navigate(['/']);
       },
       ()=>{
         alert("unable to login");
       })
     
   }


  ngOnInit(): void {
  }

}
