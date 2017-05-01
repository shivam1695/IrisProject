"use strict";
var core_1 = require("@angular/core");
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "register",
        templateUrl: "register/register.html"
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBaUQ7QUFRakQsSUFBYSxpQkFBaUI7SUFBOUI7SUFjQSxDQUFDO0lBWkcsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsVUFBc0I7UUFDNUIsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdkIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckIsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkIsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGlCQUFpQjtJQUo3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFDLHdCQUF3QjtLQUNyQyxDQUFDO0dBQ1csaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInJlZ2lzdGVyXCIsXG4gIHRlbXBsYXRlVXJsOlwicmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbFwiIFxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICB1c2VyOlVzZXI7XG4gICAgbmdPbkluaXQoKXtcblxuICAgIH1cblxuICAgIGNvbmZpZ3VyZShkYXRlUGlja2VyOiBEYXRlUGlja2VyKSB7XG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5ODA7XG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAyO1xuICAgICAgICBkYXRlUGlja2VyLmRheSA9IDk7XG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG5ldyBEYXRlKDE5NzUsIDAsIDI5KTtcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xuICAgIH1cbiAgXG59XG4iXX0=