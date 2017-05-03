"use strict";
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var Register1Component = (function () {
    function Register1Component() {
    }
    Register1Component.prototype.ngOnInit = function () {
        this.user.email = applicationSettings.getString('email') != null ? applicationSettings.getString('email') : '';
    };
    Register1Component.prototype.save = function () {
        applicationSettings.setString('email', JSON.stringify(this.user.email));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIxLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUVoRCwwREFBNEQ7QUFPNUQsSUFBYSxrQkFBa0I7SUFBL0I7SUFjQSxDQUFDO0lBWEcscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBRSxJQUFJLEdBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFDLEVBQUUsQ0FBQztJQUMzRyxDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDSSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFDLHlCQUF5QjtRQUNyQyxTQUFTLEVBQUMsQ0FBQyx1QkFBdUIsQ0FBQztLQUNwQyxDQUFDO0dBQ1csa0JBQWtCLENBYzlCO0FBZFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInJlZ2lzdGVyMVwiLFxuICB0ZW1wbGF0ZVVybDpcInJlZ2lzdGVyL3JlZ2lzdGVyMS5odG1sXCIsXG4gIHN0eWxlVXJsczpbXCJyZWdpc3Rlci9yZWdpc3Rlci5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHVzZXI6VXNlciA7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnVzZXIuZW1haWw9YXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ2VtYWlsJykhPW51bGw/YXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ2VtYWlsJyk6Jyc7IFxuICAgIH1cblxuICAgIHNhdmUoKXtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ2VtYWlsJyxKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIuZW1haWwpKTtcbiAgICB9XG5cbiAgICBjbGVhcigpe1xuICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLmNsZWFyKCk7XG4gICAgfVxufVxuIl19