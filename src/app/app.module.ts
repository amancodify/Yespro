import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NavbarComponent } from './navbar/navbar.component';
import { VideoheaderComponent } from './videoheader/videoheader.component';
import { BriefComponent } from './brief/brief.component';
import { BriefcontComponent } from './briefcont/briefcont.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoheaderComponent,
    BriefComponent,
    BriefcontComponent,
    ClientsComponent,
    FooterComponent,
    LatestnewsComponent,
    ContactusComponent,
    MainComponent,
    AboutComponent,
    HowitworksComponent,
    BlogsComponent,
    FreelancerComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ParallaxModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, BrowserAnimationsModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
