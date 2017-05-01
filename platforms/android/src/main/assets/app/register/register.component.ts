import { Component ,OnInit} from "@angular/core";
import { User } from "../shared/user/user";
import { DatePicker } from "ui/date-picker";

@Component({
  selector: "register",
  templateUrl:"register/register.html" 
})
export class RegisterComponent implements OnInit{
    user:User;
    ngOnInit(){

    }

    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }
  
}
