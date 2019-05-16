import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  
  title = 'YesPro-final';
  submitForm: FormGroup;
  private userQueries: AngularFirestoreCollection<any>;
  submitted = false;
  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.userQueries = this.afs.collection<any>('user_queries');
    this.submitForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit(formValues) {
    this.userQueries.add(formValues.value);
    this.submitForm.reset();
    this.submitted = true;
  }
}
