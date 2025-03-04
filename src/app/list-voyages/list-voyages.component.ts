import { Component, OnInit } from '@angular/core';
import { Voyage } from '../model/voyages.type';
import { VoyageService } from '../services/service-voyage.service';
import { CardVoyagesComponent } from "../card-voyages/card-voyages.component";

@Component({
  selector: 'app-listvoyages',
  standalone: true,
  imports: [CardVoyagesComponent],
  templateUrl: './list-voyages.component.html',
  styleUrl: './list-voyages.component.scss'
})
export class ListVoyagesComponent implements OnInit {
  voyages: Voyage[];
  actualPage: number = 0;
  sliceSize: number = 20;
  totalPage: number = 0;

  constructor(private service: VoyageService) {
    this.voyages = this.service.findAll();
  }
  ngOnInit() {
    this.voyages = this.service.getVoyagesSlice(this.actualPage, this.sliceSize);
    this.totalPage = Math.max(1,Math.ceil(this.service.findAll().length / this.sliceSize));
  }

  suprimmerElement(id: number) {
    this.service.supprVoyage(id);
    this.voyages = this.service.getVoyagesSlice(this.actualPage, this.sliceSize);
    this.totalPage = Math.max(1,Math.ceil(this.service.findAll().length / this.sliceSize));
  }

  nextPage() {
    if (this.actualPage < this.totalPage - 1) {
      this.actualPage++;
      this.updateVoyages();
    }
  }

  previousPage() {
    if (this.actualPage > 0) {
      this.actualPage--;
      this.updateVoyages();
    }
  }

  updateVoyages() {
    this.voyages = this.service.getVoyagesSlice(this.actualPage, this.sliceSize);
  }

}
