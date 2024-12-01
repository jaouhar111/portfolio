// contact.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  contactForm: FormGroup;
  isInView = false;

  contactInfo = [
    {
      icon: 'fa-regular fa-envelope text-xl',
      title: 'Email',
      content: 'contact@example.com'
    },
    {
      icon: 'fa-solid fa-comment-sms text-xl',
      title: "Let's Talk",
      content: 'Schedule a call or video chat'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isInView = entry.isIntersecting;
      },
      {
        threshold: 0.1
      }
    );

    const element = document.querySelector('#contact-section');
    if (element) {
      observer.observe(element);
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }

  get buttonClasses(): string {
    return `w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
            transition-all duration-300 flex items-center justify-center space-x-2 
            hover:scale-102 active:scale-98`;
  }
}