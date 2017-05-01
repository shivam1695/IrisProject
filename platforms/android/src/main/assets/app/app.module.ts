import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { AppComponent } from "./app.component";
import {RegisterComponent} from "../app/register/register.component"

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptFormsModule,
    NativeScriptHttpModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[ModalDialogService]
})
export class AppModule {}
