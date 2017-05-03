import { Component,OnInit} from "@angular/core";
import { User } from "../shared/user/user";
import * as applicationSettings from "application-settings";

@Component({
  selector: "register1",
  templateUrl:"register/register1.html",
  styleUrls:["register/register.css"]
})
export class Register1Component implements OnInit{
    user:User ;

    ngOnInit(){
        this.user.email=applicationSettings.getString('email')!=null?applicationSettings.getString('email'):''; 
    }

    save(){
        applicationSettings.setString('email',JSON.stringify(this.user.email));
    }

    clear(){
        applicationSettings.clear();
    }
}
