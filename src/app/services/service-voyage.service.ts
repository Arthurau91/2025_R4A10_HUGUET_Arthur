import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyages.type';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from "../model/data";

@Injectable({
  providedIn: 'root'
})
export class ServiceVoyageService {

  private readonly voyages: Voyage[] = [
    this.createVoyage(),
    this.createVoyage(),
    this.createVoyage(),
    this.createVoyage()
  ];

  findAll(): Voyage[] {
    return this.voyages;
  }

  createVoyage(): Voyage {
    return {
        destination: DESTINATIONS[Math.random()*DESTINATIONS.length],
        description: DESCRIPTIONS[Math.random()*DESCRIPTIONS.length],
        prix: PRIX[Math.random()*PRIX.length],
        id: generateUniqueId()
    };
  }
}

function generateUniqueId() {
  let randomId = Math.random().toString();
  randomId = randomId.replace('.', '');
  return randomId;
}
