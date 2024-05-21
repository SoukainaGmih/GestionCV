import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { Candidat } from '../../Models/candidat.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  private baseUrl = 'http://localhost:3000/candidates';

  constructor(private http: HttpClient) { }

  public getCandidats(): Observable<Array<Candidat>> {
    return this.http.get<Array<Candidat>>(`${this.baseUrl}`);
  }

  public addCandidat(formData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, formData);
  }

  public searchCandidats(keyword: string): Observable<Array<Candidat>> {
    return this.http.get<Candidat[]>(`${this.baseUrl}`).pipe(
      map(candidats => candidats.filter(candidat => 
        candidat.firstName.toLowerCase().includes(keyword.toLowerCase())|| 
        candidat.lastName.toLowerCase().includes(keyword.toLowerCase())))
    );
  }

  public searchPays(keyword: string): Observable<Array<Candidat>> {
    return this.http.get<Candidat[]>(`${this.baseUrl}`).pipe(
      map(candidats => candidats.filter(candidat => 
        candidat.pays.toLowerCase().includes(keyword.toLowerCase())))
    );
  }

/*   public getCandidatById(id: string): Observable<Candidat | null> {
    return this.http.get<Candidat[]>(`${this.baseUrl}`).pipe(
      map(candidats => candidats.find(candidat => candidat.id.toString() === id)),
      switchMap(candidat => {
        if (candidat) {
          return of(candidat);
        } else {
          // Handle case where candidat is undefined
          return of(null);
        }
      }),
      catchError(error => {
        // Handle the error here
        console.error("Error fetching candidate:", error);
        return of(null); // Return null or any other default value
      })
    );
  } */
}













