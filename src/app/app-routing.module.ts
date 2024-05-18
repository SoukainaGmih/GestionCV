import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderVisiteurComponent } from './Visiteur/header-visiteur/header-visiteur.component';
import { SginInComponent } from './Auth/sgin-in/sgin-in.component';
import { SginUpComponent } from './Auth/sgin-up/sgin-up.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
