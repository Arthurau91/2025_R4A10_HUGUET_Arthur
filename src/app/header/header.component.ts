import { Component } from '@angular/core';
import { SubjectComponent } from '../subject/subject.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [SubjectComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  home = {
    label: `Home`,
    href: '#',
  }
  links = [
    {
      label: `Find a doctor`,
      href: '#',
    },
    {
      label: `Apps`,
      href: '#',
    },
    {
      label: `Testimonials`,
      href: '#',
    },
    {
      label: `About us`,
      href: '#',
    }
  ];
}
