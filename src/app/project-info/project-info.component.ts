import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { ProjectInfo } from './project-info-interface';

@Component({
  selector: 'app-project-info',
  standalone: true,
  templateUrl: './project-info.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent {

  projectInfo: ProjectInfo = {
    statut: '',
    personnes: 0,
    revenus: 0,
    surface: 0
  };

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.setProjectInfo(this.projectInfo);
      this.router.navigate(['/summary']);
    }
  }
}
