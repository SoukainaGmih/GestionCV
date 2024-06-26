
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnonceComponent } from './Societes/annonce/annonce.component';
import { ProfilComponent } from './Candidat/profil/profil.component';


import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderVisiteurComponent } from './Visiteur/header-visiteur/header-visiteur.component';
import { SginInComponent } from './Auth/sgin-in/sgin-in.component';
import { SginUpComponent } from './Auth/sgin-up/sgin-up.component';
import { RouterLink } from '@angular/router';
import { HeaderCondidatComponent } from './Candidat/header-condidat/header-condidat.component';
import { MainVisiteurComponent } from './Visiteur/main-visiteur/main-visiteur.component';
import { HeaderCompanyComponent } from './Societes/header-company/header-company.component';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';


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
    AnnonceComponent,
    ProfilComponent,
    HeaderCondidatComponent,
    MainVisiteurComponent,
    HeaderCompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CheckboxModule,
    RouterLink,
    CardModule,
    InputIconModule,
    IconFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    AvatarGroupModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
