import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyages.type';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from "../model/data";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  voyages: Voyage[];

  constructor() {
    const storedVoyages = localStorage.getItem('voyages');
    this.voyages = storedVoyages ? JSON.parse(storedVoyages) : [
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage(),
      this.createVoyage()
    ];
  }

  findAll(): Voyage[] {
    return this.voyages;
  }

  getVoyageById(id: number): Voyage | undefined {
    return this.voyages.find(voyage => parseInt(voyage.id) === id);
  }

  getVoyagesSlice(sliceIndex: number, sliceSize: number): Voyage[] {
    const startIndex = sliceIndex * sliceSize;
    return this.voyages.slice(startIndex, startIndex + sliceSize);
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  supprVoyage(id: number): void {
    const index = this.voyages.findIndex(voyage => parseInt(voyage.id) === id);
    if (index !== -1) {
      this.voyages.splice(index, 1);
      localStorage.setItem('voyages', JSON.stringify(this.voyages));
    }
  }

  createVoyage(): Voyage {
    return {
        destination: DESTINATIONS[Math.floor(Math.random()*DESTINATIONS.length)],
        description: DESCRIPTIONS[Math.floor(Math.random()*DESCRIPTIONS.length)],
        prix: PRIX[Math.floor(Math.random()*PRIX.length)],
        id: generateUniqueId()
    };
  }
}

function generateUniqueId() {
  let randomId = Math.random().toString();
  randomId = randomId.replace('.', '');
  return randomId;
}
