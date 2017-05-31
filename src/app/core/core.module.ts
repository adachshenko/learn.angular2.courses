import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { BreadCrumbsComponent } from './header/breadcrumbs';
import { LoaderBlockComponent } from './loader-block';
import { AuthorizationService } from './services';
import { LoaderBlockService } from './services';
import { BreadcrumbsService } from './services';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        BreadCrumbsComponent,
        LoaderBlockComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        BreadCrumbsComponent,
        LoaderBlockComponent],
    providers: [
        AuthorizationService,
        LoaderBlockService,
        BreadcrumbsService
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
