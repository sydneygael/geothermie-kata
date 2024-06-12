import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from './personal-info-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  templateUrl: './personal-info.component.html',
  imports: [FormsModule,CommonModule],
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  personalInfo: PersonalInfo = {
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  };

  constructor( private router: Router) {}

  onSubmit() {
  }
}
