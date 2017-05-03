import { Component,OnInit} from "@angular/core";
import { User } from "../shared/user/user";
import * as applicationSettings from "application-settings";

@Component({
  selector: "register2",
  templateUrl:"register/register2.html",
  styleUrls:["register/register.css"]
})
export class Register2Component implements OnInit{
    user:User ;

    ngOnInit(){
        this.user ={email:'',
        name:'',
        bdate:applicationSettings.getString('bdate')!=null?applicationSettings.getString('bdate'):null,
        phone:''};  
    }

    save2(){
        applicationSettings.setString('bdate',this.user.bdate);
    }

    clear(){
        applicationSettings.clear();
    }
}
