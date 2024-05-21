import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../Models/annonce.model';
import { AnnoncesService } from '../../Services/Annonces/annonces.service';

@Component({
  selector: 'app-main-visiteur',
  templateUrl: './main-visiteur.component.html',
  styleUrl: './main-visiteur.component.css'
})
export class MainVisiteurComponent implements OnInit {
  annonces?: Array<Annonce>;
  public keyword: string = "";

  constructor(private annoncesService: AnnoncesService) {}

  ngOnInit(): void {
    this.getAnnonces();
  }

  getAnnonces() {
    this.annoncesService.getAnnonces().subscribe({
      next: data => this.annonces = data,
      error: err => {
        console.log(err);
      }
    });
  }

  public searchWithKeyword() {
    if (this.keyword) {
      this.annoncesService.searchWithKeyword(this.keyword).subscribe({
        next: result => {
          this.annonces = result;
        },
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      });
    } else {
      this.getAnnonces(); 
    }
  }
}
