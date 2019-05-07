import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
{path: 'contact', component: ContactusComponent},
{path: '', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'howitworks', component: HowitworksComponent},
{path: 'blogs', component: BlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
