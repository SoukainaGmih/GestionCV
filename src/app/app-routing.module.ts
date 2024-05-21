import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderVisiteurComponent } from './Visiteur/header-visiteur/header-visiteur.component';
import { SginInComponent } from './Auth/sgin-in/sgin-in.component';
import { SginUpComponent } from './Auth/sgin-up/sgin-up.component';
import { ChomeComponent } from './Candidat/chome/chome.component';
import { ShomeComponent } from './Societes/shome/shome.component';
import { HeaderCompanyComponent } from './Societes/header-company/header-company.component';
import { HeaderCondidatComponent } from './Candidat/header-condidat/header-condidat.component';
import { MainVisiteurComponent } from './Visiteur/main-visiteur/main-visiteur.component';
import { AnnonceComponent } from './Societes/annonce/annonce.component';
import { ProfilComponent } from './Candidat/profil/profil.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',
    component: HeaderVisiteurComponent,
    children: [
     //{ path: '', component:  },
    ]
    },
  { path: 'login', component: SginInComponent },
  { path: 'sginup', component: SginUpComponent },
  { path: 'condidat-home', component: ChomeComponent },
  { path: 'socite-home', component: ShomeComponent },
  { path: 'Company', component: HeaderCompanyComponent },
  { path: 'Candidat', component: HeaderCondidatComponent },
  { path: 'main-visitor', component: MainVisiteurComponent },
  { path: 'annonce', component: AnnonceComponent },
  { path: 'Candidat/profile/:id', component: ProfilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
