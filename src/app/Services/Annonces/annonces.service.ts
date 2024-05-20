import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../../Models/annonce.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient) { }

  public getAnnonces(): Observable<Array<Annonce>> {
    return this.http.get<Array<Annonce>>("http://localhost:3000/annonce")
  }


  saveAnnonce(annonce: Annonce) {
    return this.http.post<Annonce>(`http://localhost:3000/annonce`, annonce)
  }

  public searchPoste(keyword: string): Observable<Array<Annonce>> {

    return this.http.get<Annonce[]>('http://localhost:3000/annonce').pipe(
      map(annonces => annonces.filter(annonce => annonce.technology.toLowerCase().includes(keyword.toLowerCase()))))
  }


  public searchCompany(keyword: string): Observable<Array<Annonce>> {

    return this.http.get<Annonce[]>('http://localhost:3000/annonce').pipe(
      map(annonces => annonces.filter(annonce => annonce.societename.toLowerCase().includes(keyword.toLowerCase()))))
  }


}
