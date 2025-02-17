import { Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { ListItem } from '../app.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardListComponent, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})

export class ServicesComponent {
    list: ListItem[] = [
        {
          src: "assets/search.png",
          title: `Search doctor`,
          description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
        },
        {
          src: "assets/pharmacy.png",
          title: `Online pharmacy`,
          description: 'Buy your medecines with our mobile application with a simple delivery system',
        },
        {
          src: "assets/consultation.png",
          title: `Consultation`,
          description: 'Free consultations with our trusted doctor and get the best recomendations',
        },
        {
          src: "assets/details.png",
          title: `Details info`,
          description: 'Free consultations with our trusted doctor and get the best recomendations',
        },
        {
          src: "assets/emergency.png",
          title: `Emergency core`,
          description: 'You can get 24/7 urgent car for yourself or your children and your lovely family',
        },
        {
          src: "assets/tracking.png",
          title: `Tracking`,
          description: 'Track and save your medical history and health data',
        },
      ];
    
      private readonly PAGE_SIZE = 6;
      private offset = 0;
      private limit = this.PAGE_SIZE;
    
      slicedList = this.list.slice(this.offset, this.limit);
    
      onPageChange(value: number) {
        if (value < 0) {
          this.offset = Math.max(0, this.offset - this.PAGE_SIZE);
          this.limit = this.offset + this.PAGE_SIZE;
        }
    
        if (value > 0) {
          this.offset = Math.min(this.list.length, this.offset + this.PAGE_SIZE); // Histoire que vous ne partiez pas trop loin
          this.limit = this.offset + this.PAGE_SIZE;
        }
    
        this.slicedList = this.list.slice(this.offset, this.limit); // Il faut faire le calcul ici pour que ça change à nouveau
      }
}