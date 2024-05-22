import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from '../../Models/candidat.model';
import { CandidatsService } from '../../Services/candidats/candidats.service';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrl: '/src/assets/styles/registration.css'
})
export class SginUpComponent {
  formData: Candidat = {
    id: 0, 
    civility: '',
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    educationLevel: '',
    experience: '',
    trainingType: '',
    jobTitle: '',
    resumeAttachmentPath: '', 
    linkedinProfile: '',
    skills: [], 
    imageUrl: '',
    title: '',
    pays: ''
  };

  currentStep = 0;
  steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }];
  marginLeft = '0%';

  constructor(private http: HttpClient, private router: Router,private candidatsService: CandidatsService) {}

  nextStep(event: Event) {
    event.preventDefault();
    this.currentStep++;
    this.updateMarginLeft();
  }

  prevStep(event: Event) {
    event.preventDefault();
    this.currentStep--;
    this.updateMarginLeft();
  }

  updateMarginLeft() {
    this.marginLeft = `-${this.currentStep * 25}%`;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('resumeAttachment', reader.result as string);
        this.formData.resumeAttachmentPath = 'localstorage'; 
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const formDataToSend = { ...this.formData };
    this.candidatsService.addCandidat(formDataToSend).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
        alert('Form submitted successfully');
        this.router.navigate(['Candidat/profile/11']);  
      },
      error: (error) => {
        console.error('Error submitting form', error);
        alert('Error submitting form. Please try again later.');
      }
    });
  }
  
  
}
