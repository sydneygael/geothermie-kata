import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

export const routes: Routes = [
    { path: '', redirectTo: '/personal-info', pathMatch: 'full' },
    { path: 'personal-info', component: PersonalInfoComponent }
];
