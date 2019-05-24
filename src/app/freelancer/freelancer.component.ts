import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {

  submitForm: FormGroup;
  private freelancers: AngularFirestoreCollection<any>;
  submitted = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.freelancers = this.afs.collection<any>('freelancers');
    this.submitForm = this.fb.group({
      name: ['', Validators.required],
      cname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      etype: ['9999', Validators.required],
      days: ['9999', Validators.required],
      freereq: ['9999', Validators.required],
      location: ['9999', Validators.required],
    });
  }

  onSubmit(formValues) {
    this.freelancers.add(formValues.value);
    this.submitForm.reset();
    this.submitted = true;
  }

}
