import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  currentMenu: string = 'home';



  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }


  /* loggedUser: any;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  } */

  /* loggedUser: any;
  
  constructor(private router: Router) {
    this.getLoggedUser();
  }
  
  async getLoggedUser() {
    try {
      const response = await fetch('http://localhost:3000/loggedUser');
      const user = await response.json();
      if (user && Object.keys(user).length > 0) {
        this.loggedUser = user;
      }
    } catch (error) {
      console.error('Error fetching logged user:', error);
    }
  } */

  /* 
  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login')
  } */

  /* async onLogoff() {
      try {
        // Clear the logged user on the server
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        };
        await fetch('http://localhost:3000/loggedUser', options);
        
        // Navigate to the login page
        this.router.navigateByUrl('/login');
      } catch (error) {
        console.error('Error during logoff:', error);
      }
    } */
  isLoggedIn: boolean = true;
  loggedUser: any;

  constructor(private router: Router) {
    this.getLoggedUser();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('/Candidat') || this.router.url.includes('/postulation')) {
          this.currentMenu = 'candidate';
        } else if (this.router.url.includes('/Company') || this.router.url.includes('/publish-announcement')) {
          this.currentMenu = 'company';
        } else {
          this.currentMenu = 'home';
        }
      }
    });
  }

  async getLoggedUser() {
    try {
      const response = await fetch('http://localhost:3000/loggedUser');
      const user = await response.json();
      if (user && Object.keys(user).length > 0) {
        this.loggedUser = user;
      }
    } catch (error) {
      console.error('Error fetching logged user:', error);
    }
  }

  async onLogoff() {
    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      };

      await fetch('http://localhost:3000/loggedUser', options);
      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Error during logoff:', error);
    }

    this.isLoggedIn = false;
  }


}
