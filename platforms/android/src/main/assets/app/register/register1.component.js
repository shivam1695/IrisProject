"use strict";
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var Register1Component = (function () {
    function Register1Component() {
    }
    Register1Component.prototype.ngOnInit = function () {
        this.user = { email: applicationSettings.getString('email') != null ? applicationSettings.getString('email') : null,
            name: '',
            bdate: '', phone: '' };
    };
    Register1Component.prototype.save1 = function () {
        applicationSettings.setString('email', this.user.email);
    };
    Register1Component.prototype.clear = function () {
        applicationSettings.clear();
    };
    return Register1Component;
}());
Register1Component = __decorate([
    core_1.Component({
        selector: "register1",
        templateUrl: "register/register1.html",
        styleUrls: ["register/register.css"]
    })
], Register1Component);
exports.Register1Component = Register1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIxLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUVoRCwwREFBNEQ7QUFPNUQsSUFBYSxrQkFBa0I7SUFBL0I7SUFnQkEsQ0FBQztJQWJHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsS0FBSyxFQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBRSxJQUFJLEdBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFDLElBQUk7WUFDM0csSUFBSSxFQUFDLEVBQUU7WUFDUCxLQUFLLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUMseUJBQXlCO1FBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJyZWdpc3RlcjFcIixcbiAgdGVtcGxhdGVVcmw6XCJyZWdpc3Rlci9yZWdpc3RlcjEuaHRtbFwiLFxuICBzdHlsZVVybHM6W1wicmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICB1c2VyOlVzZXIgO1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy51c2VyID0ge2VtYWlsOmFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdlbWFpbCcpIT1udWxsP2FwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdlbWFpbCcpOm51bGwsXG4gICAgICAgIG5hbWU6JycsXG4gICAgICAgIGJkYXRlOicnLHBob25lOicnfTsgIFxuICAgIH1cblxuICAgIHNhdmUxKCl7XG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdlbWFpbCcsdGhpcy51c2VyLmVtYWlsKTtcbiAgICB9XG5cbiAgICBjbGVhcigpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLmNsZWFyKCk7XG4gICAgfVxufVxuIl19