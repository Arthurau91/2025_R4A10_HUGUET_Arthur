import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../services/service-voyage.service';
import { PopUpService } from "../services/service-popup";
import { PopUpComponent } from '../popup/popup.component';

@Component({
  selector: 'app-detailpage',
  standalone: true,
  imports: [PopUpComponent],
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.scss'
})
export class DetailpageComponent implements OnInit {
  destination!: string;
  description!: string;
  prix!: number;
  id!: number;
  open: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private voyageservice: VoyageService, private PopUpService: PopUpService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (!isNaN(this.id)) {
        let voyage = this.voyageservice.getVoyageById(this.id);
        if (voyage) {
          this.destination = voyage.destination;
          this.description = voyage.description;
          this.prix = voyage.prix;
        }
      }
    });
  }
  
  openPopUp() {
    this.PopUpService.openPopUp();

    this.PopUpService.popupState$.subscribe(result => {
      if (result) {
        this.confirmSuprimmer();
      }
    });
  }

  confirmSuprimmer() {
    this.voyageservice.supprVoyage(this.id);
    this.router.navigate(['home']);
  }
}
