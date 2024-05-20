import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrl: '/src/assets/Auth.css'
})
export class SginInComponent {


  isSignDivVisiable: boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) { }


  /*   onRegister() {
      debugger;
      const localUser = localStorage.getItem('user');
      if(localUser != null) {
        const users =  JSON.parse(localUser);
        users.push(this.signUpObj);
        localStorage.setItem('user', JSON.stringify(users))
      } else {
        const users = [];
        users.push(this.signUpObj);
        localStorage.setItem('user', JSON.stringify(users))
      }
      alert('Registration Success')
    } */

  /*   async onRegister() {
      try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        
        const isUserExist = users.find((user: SignUpModel) => user.email === this.signUpObj.email);
        if (isUserExist) {
          alert('User with this email already exists.');
          return;
        }
    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.signUpObj)
        };
        
        await fetch('http://localhost:3000/users', options);
        alert('Registration Success');
      } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration.');
      }
    }  */

  async onRegister() {
    if (!this.signUpObj.role) {
      alert('Please select either Candidate or Company.');
      return;
    }

    try {
      const role = this.signUpObj.role;  // role should be either 'candidate' or 'company'
      const candidateUrl = 'http://localhost:3000/candidates';
      const companyUrl = 'http://localhost:3000/companies';

      const candidateResponse = await fetch(candidateUrl);
      const companyResponse = await fetch(companyUrl);

      const candidates = await candidateResponse.json();
      const companies = await companyResponse.json();

      const isUserExist = [...candidates, ...companies].some((user: any) => user.email === this.signUpObj.email);

      if (isUserExist) {
        alert('User with this email already exists.');
        return;
      }

      let url = '';
      if (role === 'candidate') {
        url = candidateUrl;
      } else if (role === 'company') {
        url = companyUrl;
      } else {
        alert('Invalid role');
        return;
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.signUpObj)
      };

      await fetch(url, options);
      alert('Registration Success');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  }

  async onLogin() {
    try {
      const candidateUrl = 'http://localhost:3000/candidates';
      const companyUrl = 'http://localhost:3000/companies';

      const candidateResponse = await fetch(candidateUrl);
      const companyResponse = await fetch(companyUrl);

      const candidates = await candidateResponse.json();
      const companies = await companyResponse.json();

      const isCandidatePresent = candidates.find((user: any) =>
        user.email === this.loginObj.email && user.password === this.loginObj.password
      );

      const isCompanyPresent = companies.find((user: any) =>
        user.email === this.loginObj.email && user.password === this.loginObj.password
      );

      if (isCandidatePresent) {
        alert("Candidate Found...");

        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(isCandidatePresent)
        };

        await fetch('http://localhost:3000/loggedUser', options);
        this.router.navigateByUrl('/Candidat');
      } else if (isCompanyPresent) {
        alert("Company Found...");

        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(isCompanyPresent)
        };

        await fetch('http://localhost:3000/loggedUser', options);
        this.router.navigateByUrl('/Company');  // Assuming company redirects to home
      } else {
        alert("No User Found");
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  }



  /*   onLogin() {
      debugger;
      const localUsers =  localStorage.getItem('user');
      if(localUsers != null) {
        const users =  JSON.parse(localUsers);
  
        const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
        if(isUserPresent != undefined) {
          alert("User Found...");
          localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
          this.router.navigateByUrl('/home');
        } else {
          alert("No User Found")
        }
      }
    } */

  /*   async onLogin() {
      try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        
        const isUserPresent = users.find((user: SignUpModel) => 
          user.email === this.loginObj.email && user.password === this.loginObj.password
        );
    
        if (isUserPresent) {
          alert("User Found...");
          
          const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(isUserPresent)
          };
          
          await fetch('http://localhost:3000/loggedUser', options);
          this.router.navigateByUrl('/home');
        } else {
          alert("No User Found");
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      }
    } */

}

export class SignUpModel {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.role = ''
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = ""
  }
}