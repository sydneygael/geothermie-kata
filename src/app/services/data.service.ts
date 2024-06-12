import { Injectable } from '@angular/core';
import { PersonalInfo } from '../personal-info/personal-info-interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  personalInfo: PersonalInfo = {
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
  };

  constructor() {}

  setPersonalInfo(info: PersonalInfo) {
    this.personalInfo = info;
  }

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }
  
}
