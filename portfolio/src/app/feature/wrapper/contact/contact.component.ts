import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {environment} from 'src/environments/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  fields: any[] = []; // Store form fields from JSON
  formData={
    name: '',
    email: '',
    message: ''
  }
  @Input()config;


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.fields = this.config.contactConfig; // Load the JSON configuration

    // Dynamically add form controls based on the JSON
    this.fields.forEach(field => {
      const validators = [];
      if (field.validators?.required) validators.push(Validators.required);
      if (field.validators?.minLength) validators.push(Validators.minLength(field.validators.minLength));
      if (field.validators?.email) validators.push(Validators.email);

      this.contactForm.addControl(field.controlName, this.fb.control('', validators));
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control?.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.formData={
        name: this.contactForm.get('name').value,
        email: this.contactForm.get('email').value,
        message: this.contactForm.get('message').value
      }
      this.sendEmail();
      this.contactForm.reset();
    }
  }

  sendEmail() {
    emailjs
      .send(
        environment.EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        environment.EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        this.formData,
        environment.PUBLIC_KEY
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          this.sendAutoReply();
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  }

  sendAutoReply() {
    const autoReplyData = {
      name: this.formData.name,
      email:this.formData.email,
    };

    emailjs
      .send(
        environment.AUTOREPLY_SERVICE_ID, // Use the same service ID
        environment.AUTOREPLY_TEMPLATE_ID, // Replace with your auto-reply template ID
        autoReplyData,
        environment.PUBLIC_KEY
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('Auto-reply sent successfully:', response.status, response.text);
        },
        (error) => {
          console.error('Failed to send auto-reply:', error);
        }
      );
  }
}
