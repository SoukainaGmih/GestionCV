import { Component } from '@angular/core';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrl: '/src/assets/styles/registration.css'
})
export class SginUpComponent {
  currentStep: number = 1;
  steps = [
    { label: 'Name' },
    { label: 'Contact' },
    { label: 'Birth' },
    { label: 'Submit' }
  ];

  get marginLeft(): string {
    return `-${(this.currentStep - 1) * 25}%`;
  }

  nextStep(event: Event) {
    event.preventDefault();
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep(event: Event) {
    event.preventDefault();
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.currentStep === this.steps.length) {
      alert('Your Form Successfully Signed up');
      location.reload();
    }
  }
}
