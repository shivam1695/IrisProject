import { Component ,OnInit} from "@angular/core";
import { User } from "../shared/user/user";
import { DatePicker } from "ui/date-picker";

@Component({
  selector: "register",
  templateUrl:"register.html" 
})
export class AppComponent implements OnInit{
    user:User;
    ngOnInit(){

    }
  
}
