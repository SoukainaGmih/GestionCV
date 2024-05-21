import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campany } from '../../Models/campany.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public getCampany(): Observable<Array<Campany>> {
    return this.http.get<Array<Campany>>("http://localhost:3000/companies")
  }



}
