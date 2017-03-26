import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { AuthorizationService } from './authorization.service';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent],
    providers: [
        AuthorizationService
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ]
})
export class CoreModule {
}
