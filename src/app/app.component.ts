import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from "./services/services.component";
import { TestimonialComponent } from './testimonial/testimonial.component';

export type ListItem = {
    src: string;
    title: string;
    description: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServicesComponent, TestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
}
