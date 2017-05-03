import { Component,OnInit} from "@angular/core";
import { User } from "../shared/user/user";
import * as applicationSettings from "application-settings";

@Component({
  selector: "register3",
  templateUrl:"register/register3.html",
  styleUrls:["register/register.css"]
})
export class Register3Component implements OnInit{
    user:User ;

    ngOnInit(){
        this.user = {email:'',
        name:'',
        bdate:'',
        phone:applicationSettings.getString('phone')!=null?applicationSettings.getString('phone'):null};  
    }

    save3(){
        applicationSettings.setString('phone',this.user.phone);
    }

    clear(){
        applicationSettings.clear();
    }
}
