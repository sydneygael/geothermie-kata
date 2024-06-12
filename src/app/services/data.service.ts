import { Injectable } from '@angular/core';
import { PersonalInfo } from '../personal-info/personal-info-interface';
import { ProjectInfo } from '../project-info/project-info-interface';

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

  projectInfo: ProjectInfo = {
    statut: '',
    personnes: 0,
    revenus: 0,
    surface: 0
  };

  constructor() {}

  setPersonalInfo(info: PersonalInfo) {
    this.personalInfo = info;
  }

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  setProjectInfo(projectInfo: ProjectInfo) {
    this.projectInfo = projectInfo;
  }


}
