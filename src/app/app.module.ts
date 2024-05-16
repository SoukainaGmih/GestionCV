
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';

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
import { FormsModule } from '@angular/forms';
import { AnnonceComponent } from './Societes/annonce/annonce.component';


import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderVisiteurComponent } from './Visiteur/header-visiteur/header-visiteur.component';
import { SginInComponent } from './Auth/sgin-in/sgin-in.component';
import { SginUpComponent } from './Auth/sgin-up/sgin-up.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderVisiteurComponent,
    SginInComponent,
    SginUpComponent,
    ChomeComponent,
    ShomeComponent,
    AnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CheckboxModule,
    RouterLink,
    CardModule,
    InputIconModule,
    IconFieldModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
