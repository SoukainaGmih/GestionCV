import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoffService } from '../../Services/LogOff/logoff.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrl: '/src/assets/Auth.css'
})
export class SginInComponent implements OnInit{
  isSignDivVisiable: boolean  = true
  showErrorModal: boolean = false;
  errorMessage: string = '';
  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  ngOnInit(): void {
  }

  name!: string;
  email!: string;
  password!: string;

  constructor(private router: Router,public logoffService: LogoffService){}

  async onRegister(form: NgForm)  {
    if (form.invalid) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!this.signUpObj.role) {
      alert('Please select either Candidate or Company.');
      return;
    }
  
    try {
      const role = this.signUpObj.role; 
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
      form.resetForm();
      this.signUpObj = new SignUpModel();
      this.isSignDivVisiable = false;
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  }
  
  async onLogin(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all required fields.');
      return;
    } 
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
    this.logoffService.login();
  }
}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password= '';
    this.role = ''
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
