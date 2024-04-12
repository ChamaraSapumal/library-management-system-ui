import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AllBooksComponent } from './page/all-books/all-books.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "all-books",
        component: AllBooksComponent
    },
    {
        path: "signup",
        component: RegisterComponent
    }
];
