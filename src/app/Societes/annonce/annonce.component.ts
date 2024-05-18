import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnoncesService } from '../../Services/Annonces/annonces.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrl: './annonce.component.css'
})
export class AnnonceComponent implements OnInit {

  userForm!: FormGroup;
  todayDate! : string;

  constructor(private formBuilder: FormBuilder, private annoncesService: AnnoncesService) { 
    this.todayDate = this.getFormattedDate();
  }

  getFormattedDate(): string {
    const today: Date = new Date();
    return today.toISOString().split('T')[0];
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(15)]],
      technology: [null, [Validators.required]],
      contrat: [null],
      startdate: [null],
      createdat : this.todayDate,
      societename : [null]
    }, {
      updateOn: "blur"
    })
  }


  saveAnnonce(){
    let annonce = this.userForm.value;
    this.annoncesService.saveAnnonce(annonce).subscribe({
      next: data =>{
        alert(JSON.stringify(data));
      }, error : err =>{
        console.log(err);
      }
    });
  }
}


