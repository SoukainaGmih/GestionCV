
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ChomeComponent } from './Candidat/chome/chome.component';
import { ShomeComponent } from './Societes/shome/shome.component';
import { CardModule } from 'primeng/card';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnonceComponent } from './Societes/annonce/annonce.component';
import { ProfilComponent } from './Candidat/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    ChomeComponent,
    ShomeComponent,
    AnnonceComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputIconModule,
    IconFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
