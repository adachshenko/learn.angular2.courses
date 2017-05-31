import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { LoaderBlockComponent } from './loader-block';
import { AuthorizationService } from './services';
import { LoaderBlockService } from './services';
//import { AuthGuard } from './services';

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
        RouterModule,
        HttpModule
    ]
})
export class CoreModule {
}
