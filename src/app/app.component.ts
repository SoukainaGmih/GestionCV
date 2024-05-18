import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ShowHidd = true;
  constructor(private router:Router){
    router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd){
          if (val.url== '/login' ||val.url== '/sginup'){
            this.ShowHidd = false
          }
          else(
            this.ShowHidd = true
          )
        }
      });
    
  }
}
