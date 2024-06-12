import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from './personal-info-interface';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

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

  emailInvalid: boolean = false;

  readonly emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!this.emailPattern.test(this.personalInfo.email)) {
      this.emailInvalid = true;
      return;
    }
    this.emailInvalid = false;

    this.dataService.setPersonalInfo(this.personalInfo);
    this.router.navigate(['/project-info']);
  }
}
