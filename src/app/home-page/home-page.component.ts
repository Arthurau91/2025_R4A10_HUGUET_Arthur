import { Component } from '@angular/core';
import { ListVoyagesComponent } from "../list-voyages/list-voyages.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListVoyagesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
