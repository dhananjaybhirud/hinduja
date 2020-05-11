import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  enquiryForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      language: ['', Validators.required],
      message: [''],
      terms: ['', Validators.required]
    });
  }

  onSubmit(){
   console.log(this.enquiryForm)
  }

}
