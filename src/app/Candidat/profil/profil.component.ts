import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../Models/candidat.model';
import { CandidatsService } from '../../Services/candidats/candidats.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {

  candidats?: Array<Candidat>;

  constructor(private candidatservice: CandidatsService) {

  }

  getCandidats() {
    this.candidatservice.getCandidats().subscribe({
      next: data => this.candidats = data,
      error: err => {
        console.log(err)
      }

    })
  }

  getSkills() {
    this.candidatservice.getCandidats().subscribe((candidat: Array<Candidat>) => {
      candidat.forEach((candidatData: Candidat) => {
        candidatData.skills.forEach((skill: any) => {

        });
      });
    });
  }


  ngOnInit(): void {
    this.getCandidats();
  }

}
