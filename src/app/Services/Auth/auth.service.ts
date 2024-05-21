import { Inject, Injectable, OnInit, inject } from '@angular/core';
import { CandidatsService } from '.././candidats/candidats.service';
import { CompanyService } from '../Company/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLogedCandidat: Boolean = false;
  candidatService: CandidatsService = Inject(CandidatsService)
  isLogedCampany: Boolean = false;
  companyService: CompanyService = Inject(CompanyService)
  activateRoute: ActivatedRoute = Inject(ActivatedRoute);

  constructor(private router: Router) { }

  changeIsLogedCandidat() {
    console.log("-------------------")
    this.isLogedCandidat = true;
  }
  changeIsLogedCampany() {
    console.log("-------------------")
    this.isLogedCampany = true;
  }


  logout() {

    this.isLogedCandidat = false
    this.isLogedCampany = false
  }

  isAuthenticatedCandidat() {
    return this.isLogedCandidat;
  }

  isAuthenticatedCampany() {
    return this.isLogedCampany;
  }


}
