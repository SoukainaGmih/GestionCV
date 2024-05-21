import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../Models/candidat.model';
import { CandidatsService } from '../../Services/candidats/candidats.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  candidats: Array<Candidat> = [];
  loggedUser: any;
  candidateInfo: Candidat | undefined;

  constructor(
    private candidatservice: CandidatsService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  async loadUser(): Promise<void> {
    try {
      // Fetch logged user
      const userResponse = await fetch('http://localhost:3000/loggedUser');
      this.loggedUser = await userResponse.json();
      console.log("Logged-in user:" , this.loggedUser);

      // Fetch candidates
      this.candidatservice.getCandidats().subscribe(
        (data: Array<Candidat>) => {
          this.candidats = data;
          console.log("candidats:" , this.candidats);

          // Find candidate info based on logged user ID
          this.candidateInfo = this.candidats.find(
            candidat => candidat.id === this.loggedUser.id
          );
          if (this.candidateInfo) {
            console.log("candidate Info :" , this.candidateInfo);
          } else {
            console.log('No candidate information found for the logged-in user.');
          }
        },
        (error) => {
          console.error('Error fetching candidates:', error);
        }
      );
    } catch (error) {
      console.error('Error fetching logged user:', error);
    }
  }
}
