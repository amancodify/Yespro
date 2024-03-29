import { LogintypeComponent } from './logintype/logintype.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GrabeventsComponent } from './grabevents/grabevents.component';
import { Signup2Component } from './signup2/signup2.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';

const routes: Routes = [
{path: 'contact', component: ContactusComponent},
{path: '', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'howitworks', component: HowitworksComponent},
{path: 'blogs', component: BlogsComponent},
{path: 'freelancer', component: FreelancerComponent},
{path: 'signup', component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: 'grabevents', component: GrabeventsComponent},
{path: 'logintype', component: LogintypeComponent},
{path: 'logincustomer', component: LogincustomerComponent},
{path: 'signup2', component: Signup2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
