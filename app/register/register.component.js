"use strict";
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = { email: '',
            name: applicationSettings.getString('name') != null ? applicationSettings.getString('name') : null,
            bdate: '', phone: '' };
    };
    RegisterComponent.prototype.save = function () {
        applicationSettings.setString('name', this.user.name);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "register",
        templateUrl: "register/register.html",
        styleUrls: ["register/register.css"]
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBdUU7QUFJdkUsMERBQTREO0FBUTVELElBQWEsaUJBQWlCO0lBQTlCO0lBZ0JBLENBQUM7SUFiRyxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBQyxFQUFFO1lBQ3JCLElBQUksRUFBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUUsSUFBSSxHQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBQyxJQUFJO1lBQzNGLEtBQUssRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFJTCx3QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUMsd0JBQXdCO1FBQ3BDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxpQkFBaUIsQ0FnQjdCO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkICxPbkluaXQsRWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInJlZ2lzdGVyXCIsXG4gIHRlbXBsYXRlVXJsOlwicmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbFwiLFxuICBzdHlsZVVybHM6W1wicmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHVzZXI6VXNlciA7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnVzZXIgPSB7ZW1haWw6JycsXG4gICAgICAgIG5hbWU6YXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ25hbWUnKSE9bnVsbD9hcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygnbmFtZScpOm51bGwsXG4gICAgICAgIGJkYXRlOicnLHBob25lOicnfTsgXG4gICAgfVxuXG4gICAgc2F2ZSgpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygnbmFtZScsdGhpcy51c2VyLm5hbWUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgIFxuICBcbn1cbiJdfQ==