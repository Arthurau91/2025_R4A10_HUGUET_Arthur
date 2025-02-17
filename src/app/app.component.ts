import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from "./services/services.component";
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from "./footer/footer.component";

export type ListItem = {
    src: string;
    title: string;
    description: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServicesComponent, TestimonialComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
}
