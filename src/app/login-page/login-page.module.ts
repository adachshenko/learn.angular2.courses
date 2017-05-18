import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    exports: [
        LoginPageComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule
    ]
})
export class LoginPageModule {
}
