import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { provideRouter, Router } from '@angular/router';
import { PersonalInfoComponent } from './personal-info.component';
import { DataService } from '../services/data.service';
import { routes } from '../app.routes';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoComponent ],
      imports: [ FormsModule ],
      providers: [
        DataService,
        provideRouter(routes)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid email when email pattern is incorrect', () => {
    component.personalInfo.email = 'invalid-email';
    component.onSubmit({ valid: true } as NgForm);
    expect(component.emailInvalid).toBeTrue();
  });

  it('should call setPersonalInfo on DataService when form is valid', () => {
    const dataService = TestBed.inject(DataService);
    spyOn(dataService, 'setPersonalInfo');

    component.personalInfo = {
      civilite: 'Mr',
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      telephone: '0123456789'
    };

    component.onSubmit({ valid: true } as NgForm);

    expect(dataService.setPersonalInfo).toHaveBeenCalledWith(component.personalInfo);
  });

  it('should navigate to project-info when form is valid', () => {
    spyOn(router, 'navigate');

    component.personalInfo = {
      civilite: 'Mr',
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      telephone: '0123456789'
    };

    component.onSubmit({ valid: true } as NgForm);

    expect(router.navigate).toHaveBeenCalledWith(['/project-info']);
  });
});
