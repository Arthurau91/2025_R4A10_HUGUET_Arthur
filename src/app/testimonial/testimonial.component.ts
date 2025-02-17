import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-testimonial',
  standalone: true, 
  imports: [ButtonComponent],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  testimonials = [
    { name: 'Edward Newgate', role: 'Founder Circle', image: 'assets/edward-newgate.jpg', testimonial: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.' },
    { name: 'Jane Doe', role: 'CEO, Tech Solutions', image: 'assets/jane-doe.jpg', testimonial: 'This service has revolutionized how we interact with our customers. Highly recommended!' }
  ];

  currentIndex = 0;

  get customer() {
    return this.testimonials[this.currentIndex];
  }

  prevTestimonial() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  nextTestimonial() {
    this.currentIndex = this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;
  }
}
