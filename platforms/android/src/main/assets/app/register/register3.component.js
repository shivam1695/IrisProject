"use strict";
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var Register3Component = (function () {
    function Register3Component() {
    }
    Register3Component.prototype.ngOnInit = function () {
        this.user = { email: '',
            name: '',
            bdate: '',
            phone: applicationSettings.getString('phone') != null ? applicationSettings.getString('phone') : null };
    };
    Register3Component.prototype.save3 = function () {
        applicationSettings.setString('phone', this.user.phone);
    };
    Register3Component.prototype.clear = function () {
        applicationSettings.clear();
    };
    return Register3Component;
}());
Register3Component = __decorate([
    core_1.Component({
        selector: "register3",
        templateUrl: "register/register3.html",
        styleUrls: ["register/register.css"]
    })
], Register3Component);
exports.Register3Component = Register3Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyMy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUVoRCwwREFBNEQ7QUFPNUQsSUFBYSxrQkFBa0I7SUFBL0I7SUFpQkEsQ0FBQztJQWRHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsS0FBSyxFQUFDLEVBQUU7WUFDckIsSUFBSSxFQUFDLEVBQUU7WUFDUCxLQUFLLEVBQUMsRUFBRTtZQUNSLEtBQUssRUFBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUUsSUFBSSxHQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBQyxJQUFJLEVBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUMseUJBQXlCO1FBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxrQkFBa0IsQ0FpQjlCO0FBakJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJyZWdpc3RlcjNcIixcbiAgdGVtcGxhdGVVcmw6XCJyZWdpc3Rlci9yZWdpc3RlcjMuaHRtbFwiLFxuICBzdHlsZVVybHM6W1wicmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyM0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICB1c2VyOlVzZXIgO1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy51c2VyID0ge2VtYWlsOicnLFxuICAgICAgICBuYW1lOicnLFxuICAgICAgICBiZGF0ZTonJyxcbiAgICAgICAgcGhvbmU6YXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Bob25lJykhPW51bGw/YXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Bob25lJyk6bnVsbH07ICBcbiAgICB9XG5cbiAgICBzYXZlMygpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygncGhvbmUnLHRoaXMudXNlci5waG9uZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKXtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5jbGVhcigpO1xuICAgIH1cbn1cbiJdfQ==