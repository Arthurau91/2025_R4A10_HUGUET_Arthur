import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  private popupState = new Subject<boolean>();
  popupState$ = this.popupState.asObservable();

  private showPopUpSubject = new Subject<boolean>();
  showPopUp$ = this.showPopUpSubject.asObservable();

  openPopUp() {
    this.showPopUpSubject.next(true);
    console.log('openPopUp');
  }

  closePopUp(result: boolean) {
    this.popupState.next(result);
    this.showPopUpSubject.next(false);
  }
}
