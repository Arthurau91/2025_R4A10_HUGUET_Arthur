import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
    categories = [
      {title: 'Compagny', links: ['About', 'Testimonials', 'Find a doctor', 'Apps']},
      {title: 'Region', links: ['Indonesia', 'Singapore', 'Hongkong', 'Canada']},
      {title: 'Help', links: ['Help center', 'Contact support', 'Instructions', 'How it works']}
    ]
}
