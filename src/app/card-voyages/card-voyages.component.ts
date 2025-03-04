import { Component, Input, Output, numberAttribute, EventEmitter } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PopUpComponent } from "../popup/popup.component";
import { PopUpService } from "../services/service-popup";


@Component({
  selector: "app-cardvoyages",
  standalone: true,
  imports: [RouterLink, PopUpComponent],
  templateUrl: "./card-voyages.component.html",
  styleUrl: "./card-voyages.component.scss"
})
export class CardVoyagesComponent {
  constructor(private PopUpService: PopUpService) {}

  @Input() destination!: string;
  @Input() description!: string;
  @Input() prix!: number;
  @Input({transform: numberAttribute}) id!: number;
  @Output() suprimmer: EventEmitter<number> = new EventEmitter<number>();

  openPopUp() {
    this.PopUpService.openPopUp();

    this.PopUpService.popupState$.subscribe(result => {
      if (result) {
        this.suprimmer.emit(this.id);
      }
    });
  }
}
