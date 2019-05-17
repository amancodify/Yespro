import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.css']
})
export class BriefComponent implements OnInit {

  services = [];
  constructor() { }

  ngOnInit() {
    this.services = this.getServices();
  }
  getServices(): any {
    return [
      {
        image: 'assets/images/freelancer.png',
        title: 'FREELANCER',
        body: 'The expert professionals are waiting for you to hire, go and grab the best one.'
      },
      {
        image: 'assets/images/card1.png',
        title: 'EVENTS',
        body: "Don't miss a chance of working in the best events happening around you. Get it now !!"
      },
      {
        image: 'assets/images/vendor.png',
        title: 'VENDORS',
        body: 'Dive into the ocean of vendors and make the business according to you ideas and aspiration.'
      },
      {
        image: 'assets/images/artist.png',
        title: 'ARTISTS',
        body: 'Artists put life & Soul to the events that we have them for you, reach them out for soulful event!!'
      },
      {
        image: 'assets/images/venue.png',
        title: 'VENUE',
        body: 'Getting place of your choice is first thing to do, get the venue early before you start your event.'
      },
      {
        image: 'assets/images/bouncers.png',
        title: 'BOUNCERS',
        body: 'Security & Protection is a must thing to have around you, Feel secured and hire them !!'
      },
     
    ]
  }

}
