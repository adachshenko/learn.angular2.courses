import { Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NoContentComponent } from './no-content/';
import { AddCourseComponent } from './courses/add-course/';

export const ROUTES: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:id', component: AddCourseComponent },
    { path: 'add-course', component: AddCourseComponent },
    { path: '**', component: NoContentComponent }
];
