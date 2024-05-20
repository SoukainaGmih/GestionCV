import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../Models/annonce.model';
import { AnnoncesService } from '../../Services/Annonces/annonces.service';

@Component({
  selector: 'app-main-visiteur',
  templateUrl: './main-visiteur.component.html',
  styleUrl: './main-visiteur.component.css'
})
export class MainVisiteurComponent implements OnInit{

  annonces?: Array<Annonce>;
  public keyword : string =""
  public keycompany : string =""

  constructor(private annoncesService: AnnoncesService) {

  }

  ngOnInit(): void {
    this.getAnnonces();
  }

  getAnnonces() {
    this.annoncesService.getAnnonces().subscribe({
      next: data => this.annonces = data,
      error: err => {
        console.log(err)
      }

    })
  }

  public searchPoste() {
    this.annoncesService.searchPoste(this.keyword).subscribe({
      next: candidatbyname => {
        this.annonces = candidatbyname
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  public searchCompany() {
    this.annoncesService.searchCompany(this.keycompany).subscribe({
      next: candidatbyname => {
        this.annonces = candidatbyname
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }
}
