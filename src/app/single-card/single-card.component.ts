import { Component, Input } from '@angular/core';
import { ListItem } from '../app.component';

@Component({
  standalone: true,
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrl: './single-card.component.scss',
})
export class SingleCardComponent {
  @Input({ required: true, alias: 'cardData' }) data!: ListItem;
}
