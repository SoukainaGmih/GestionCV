import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../../Models/candidat.model';
import { map } from 'rxjs';
import { skills } from '../../Models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  constructor(private http: HttpClient) { }

  public getCandidats(): Observable<Array<Candidat>> {
    return this.http.get<Array<Candidat>>("http://localhost:3000/candidates")
  }




  public searchCandidats(keyword: string): Observable<Array<Candidat>> {

    return this.http.get<Candidat[]>('http://localhost:3000/candidates').pipe(
      map(candidats => candidats.filter(candidat => candidat.name.toLowerCase().includes(keyword.toLowerCase()))))
  }


  public searchPays(keyword: string): Observable<Array<Candidat>> {

    return this.http.get<Candidat[]>('http://localhost:3000/candidates').pipe(
      map(candidats => candidats.filter(candidat => candidat.pays.toLowerCase().includes(keyword.toLowerCase()))))
  }



}













