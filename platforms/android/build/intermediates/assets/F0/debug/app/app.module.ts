import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  declarations: [AppComponent,...navigatableComponents],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptFormsModule,
    NativeScriptHttpModule,NativeScriptRouterModule,NativeScriptRouterModule.forRoot(routes)],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[ModalDialogService]
})
export class AppModule {}
