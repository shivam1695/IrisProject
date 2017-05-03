"use strict";
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var Register2Component = (function () {
    function Register2Component() {
    }
    Register2Component.prototype.ngOnInit = function () {
        this.user = { email: '',
            name: '',
            bdate: applicationSettings.getString('bdate') != null ? applicationSettings.getString('bdate') : null,
            phone: '' };
    };
    Register2Component.prototype.save2 = function () {
        applicationSettings.setString('bdate', this.user.bdate);
    };
    Register2Component.prototype.clear = function () {
        applicationSettings.clear();
    };
    return Register2Component;
}());
Register2Component = __decorate([
    core_1.Component({
        selector: "register2",
        templateUrl: "register/register2.html",
        styleUrls: ["register/register.css"]
    })
], Register2Component);
exports.Register2Component = Register2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUVoRCwwREFBNEQ7QUFPNUQsSUFBYSxrQkFBa0I7SUFBL0I7SUFpQkEsQ0FBQztJQWRHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUU7WUFDcEIsSUFBSSxFQUFDLEVBQUU7WUFDUCxLQUFLLEVBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFFLElBQUksR0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUMsSUFBSTtZQUM5RixLQUFLLEVBQUMsRUFBRSxFQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUMseUJBQXlCO1FBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxrQkFBa0IsQ0FpQjlCO0FBakJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJyZWdpc3RlcjJcIixcbiAgdGVtcGxhdGVVcmw6XCJyZWdpc3Rlci9yZWdpc3RlcjIuaHRtbFwiLFxuICBzdHlsZVVybHM6W1wicmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICB1c2VyOlVzZXIgO1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy51c2VyID17ZW1haWw6JycsXG4gICAgICAgIG5hbWU6JycsXG4gICAgICAgIGJkYXRlOmFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdiZGF0ZScpIT1udWxsP2FwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdiZGF0ZScpOm51bGwsXG4gICAgICAgIHBob25lOicnfTsgIFxuICAgIH1cblxuICAgIHNhdmUyKCl7XG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdiZGF0ZScsdGhpcy51c2VyLmJkYXRlKTtcbiAgICB9XG5cbiAgICBjbGVhcigpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLmNsZWFyKCk7XG4gICAgfVxufVxuIl19