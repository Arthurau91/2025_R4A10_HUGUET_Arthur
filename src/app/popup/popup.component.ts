import { Component } from '@angular/core';
import { PopUpService } from '../services/service-popup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent {
  isVisible = false;

  constructor(private popUpService: PopUpService) {
    this.popUpService.showPopUp$.subscribe(state => {
      this.isVisible = state;
    });
  }

  onCancel() {
    console.log("onCancel");
    this.popUpService.closePopUp(false);
  }

  onConfirm() {
    this.popUpService.closePopUp(true);
  }
}
