import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoansComponent } from './components/loans/loans.component';
import { LoanApplicationsComponent } from './components/loan-applications/loan-applications.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'loans', component: LoansComponent },
    { path: 'users', component: LoanApplicationsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);