import { Routes } from '@angular/router';
import { AuthGuard } from './core/services';
import { CoursesComponent } from './courses/courses.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NoContentComponent } from './no-content/';
import { AddCourseComponent } from './courses/add-course/';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'courses', component: CoursesComponent, canActivate: [ AuthGuard ] },
    { path: 'courses/:id', component: AddCourseComponent, canActivate: [ AuthGuard ]},
    { path: 'add-course', component: AddCourseComponent, canActivate: [ AuthGuard ] },
    { path: '**', component: NoContentComponent }
];
