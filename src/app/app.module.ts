import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { HttpClientModule } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
let providers = {
    // "google": {
    //   "clientId": "GOOGLE_CLIENT_ID"
    // },
    // "linkedin": {
    //   "clientId": "LINKEDIN_CLIENT_ID"
    // },
    "facebook": {
      "clientId": "2195311474022211",
      "apiVersion": "v2.12" //like v2.4
    }
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    Angular2SocialLoginModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
  ]
})
export class AppModule {}
Angular2SocialLoginModule.loadProvidersScripts(providers);