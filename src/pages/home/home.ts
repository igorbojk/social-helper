import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "angular2-social-login";
import { HttpClient } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	user: any;
  constructor(public navCtrl: NavController,
  	public auth: AuthService,
  	private http: HttpClient,
  	private localNotifications: LocalNotifications
  	) {

  	
  }

	signIn(provider){
	   this.auth.login(provider).subscribe(
	      (data) => {
	      	console.log(data);
	      	this.user = data;
            }
	    )
	  }


	  getNotification(){
	  	this.localNotifications.schedule({
			id: 1,
			title: 'Local ILocalNotification Example',
			text: 'Multi ILocalNotification 2',
			data: { secret: 'key' }
		});
	  }

	getFriends(){
		this.http.get(`https://graph.facebook.com/v2.12/me/friends?access_token=${this.user.token}&debug=all&format=json&method=get&pretty=0&suppress_http_code=1&total=15`).subscribe(
			result => {
				console.log(result);
			});
	}

}


