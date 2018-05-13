var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "angular2-social-login";
import { HttpClient } from '@angular/common/http';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, http) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.http = http;
    }
    HomePage.prototype.signIn = function (provider) {
        var _this = this;
        this.auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            // "796307833889058"
            // console.log(data);
            //user data
            //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
        });
    };
    HomePage.prototype.getFriends = function () {
        this.http.get("https://graph.facebook.com/v2.12/me/friends?access_token=EAACEdEose0cBAB9j36MdE9z3EowfZBPBqU1Ea1RZBjUDX40wRCFGVZCj5vOZC5YTOCZBnM1Epx2VJjAxjBvDJspQfS9c6VGHjEXvbuj5iRWHY9APHZBkbUH6NbVrmwCbMuZBSwwHOMMm5cUf8PnMOprs1OZB39rLzmvFwOxYPnseeL8w1kQnpr8ZCfY5Y1hCUS4YZD&debug=all&format=json&method=get&pretty=0&suppress_http_code=1&total=15").subscribe(function (result) {
            console.log(result);
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            AuthService,
            HttpClient])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map