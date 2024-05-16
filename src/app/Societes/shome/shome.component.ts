import { Component, OnInit } from '@angular/core';
import { CandidatsService } from '../../Services/candidats.service';
import { Candidat } from '../../Models/candidat.model';


@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrl: './shome.component.css'
})
export class ShomeComponent implements OnInit {

  candidats?: Array<Candidat>;
  public keyword: string = "";
  public keypays: string = "";

  constructor(private candidatservice: CandidatsService) {

  }

  ngOnInit(): void {
    this.getCandidats()
  }

  getCandidats() {
    this.candidatservice.getCandidats().subscribe({
      next: data => this.candidats = data,
      error: err => {
        console.log(err)
      }

    })
  }


  public searchCandidats() {
    this.candidatservice.searchCandidats(this.keyword).subscribe({
      next: candidatbyname => {
        this.candidats = candidatbyname
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),

    });
  }

  public searchPays(){
    this.candidatservice.searchPays(this.keypays).subscribe({
      next: candidatbyname => {
        this.candidats = candidatbyname
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),

    });
  }




}