import { Component, ViewChild ,OnInit,ElementRef} from "@angular/core";
import { User } from "../shared/user/user";
import { DatePicker } from "ui/date-picker";
import { Progress } from "ui/progress";
import * as applicationSettings from "application-settings";


@Component({
  selector: "register",
  templateUrl:"register/register.html",
  styleUrls:["register/register.css"]
})
export class RegisterComponent implements OnInit{
    user:User ;

    ngOnInit(){
        this.user = {email:'',
        name:applicationSettings.getString('name')!=null?applicationSettings.getString('name'):null,
        bdate:'',phone:''}; 
    }

    save(){
        applicationSettings.setString('name',this.user.name);
        
    }

   
  
}
