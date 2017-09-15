"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentUser = { username: "Test", email: "test@test.com" };
        this.hideEmail = false;
    }
    AppComponent.prototype.toggleEmail = function () {
        return this.hideEmail = !this.hideEmail;
    };
    AppComponent.prototype.changeEmail = function (newEmail) {
        this.currentUser.email = newEmail;
    };
    //deprecated
    AppComponent.prototype.keyPress = function (event) {
        if (event.keyCode == 13) {
            var inputElement = event.target;
            this.changeEmail(inputElement.value);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map