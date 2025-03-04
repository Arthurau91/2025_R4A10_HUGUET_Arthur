import { Component, OnInit } from '@angular/core';
import { Voyage } from '../model/voyages.type';
import { VoyageService } from '../services/service-voyage.service';

@Component({
  selector: 'app-generatepage',
  standalone: true,
  imports: [],
  templateUrl: './generatepage.component.html',
  styleUrl: './generatepage.component.scss'
})
export class GeneratepageComponent implements OnInit {
  listeVoyages: Voyage[] = [];
  voyageAleatoire: Voyage | null = null;

  constructor(private voyageService: VoyageService) {}

  ngOnInit() {
    this.listeVoyages = this.voyageService.findAll();
  }

  genererVoyage() {
    this.voyageAleatoire = this.voyageService.createVoyage();
  }

  validerAjout() {
    if (this.voyageAleatoire) {
      this.voyageService.addVoyage(this.voyageAleatoire);
      this.voyageAleatoire = null;
    }
  }

  supprimerVoyage() {
    this.voyageAleatoire = null;
  }

}