import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { LoaderBlockComponent } from './loader-block';
import { AuthorizationService } from './authorization.service';
import { LoaderBlockService } from './loader-block';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        LoaderBlockComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        LoaderBlockComponent],
    providers: [
        AuthorizationService,
        LoaderBlockService
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ]
})
export class CoreModule {
}
