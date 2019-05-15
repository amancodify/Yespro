import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { 
  fname: string; 
  lname: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private user_queries: AngularFirestore) { 
    
  }
  ngOnInit() {
    this.itemsCollection = this.user_queries.collection<Item>('user_queries')
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
}
