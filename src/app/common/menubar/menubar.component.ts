import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogstatusService } from 'src/app/services/logstatus.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']

})
export class MenubarComponent implements OnInit {
  lang:string="English";
 // log_message:string="login";

  constructor(private ts:TranslateService,public ls:LogstatusService) {
    this.ts.use(this.lang);
   }

  ngOnInit(): void {

    //login check
    
    let UserName=localStorage.getItem("username");
    if(UserName){
    this.ls.updateStatus(true);
    this.ls.message="hello,"+UserName;
  }
  }

  langChange()
  {
    this.ts.use(this.lang);
  }

}
