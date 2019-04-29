import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoheaderComponent } from './videoheader/videoheader.component';
import { BriefComponent } from './brief/brief.component';
import { BriefcontComponent } from './briefcont/briefcont.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoheaderComponent,
    BriefComponent,
    BriefcontComponent,
    ClientsComponent,
    FooterComponent,
    LatestnewsComponent
  ],
  imports: [
    BrowserModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
