import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  enquiryForm: FormGroup;
  submitted = false;
  @ViewChild('reportContent') reportContent: ElementRef;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      language: [''],
      message: [''],
      terms: ['', Validators.required]
    });
    console.log(this.enquiryForm);
  }


  get f() { return this.enquiryForm.controls; }


  //  This is for omit number and special characters
  omit_special_char(event){   
      var k;  
      k = event.charCode;  
      if(((k > 64 && k < 91) || (k > 96 && k < 123) )){
             return true;
      }
      else{
             return false;
      }
    }
    

  onSubmit(){
    //  console.log(this.enquiryForm)
    this.submitted = true;
    if(this.enquiryForm.valid){
      const doc = new jspdf;
      const specialElementHandlers = {
        '#editor': function (element, renderer) {
          return true;
        }
      };

      const content = this.reportContent.nativeElement;

      doc.fromHTML(content.innerHTML, 15, 15, {
        'width': 190,
        'elementHandlers': specialElementHandlers
      });

      doc.save('asdfghj' + '.pdf');
    }
    console.log(this.enquiryForm);
  }

}
