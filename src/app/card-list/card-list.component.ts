import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from '../app.component';
import { SingleCardComponent } from '../single-card/single-card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-card-list',
  styleUrl: './card-list.component.scss',
  templateUrl: './card-list.component.html',
  imports: [SingleCardComponent, ButtonComponent],
})
export class CardListComponent {
  @Input({ required: true }) cards!: ListItem[]; // @Input permet de dire qu'on va recevoir des informations du parent

  @Output() pageChangeEvent = new EventEmitter<number>(); // @Output permet de dire qu'on va envoyer des infos au parent

  onPrevClick() {
    this.pageChangeEvent.emit(-1);
  }

  onNextClick() {
    this.pageChangeEvent.emit(1);
  }
}
