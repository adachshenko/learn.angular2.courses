import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { AuthorizationService } from '../core/services/authorization.service';
import { LoaderBlockService } from '../core/services';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class LoginPageComponent {

    public userLogin: string;
    public userPassword: string;

    constructor(private authorizationService: AuthorizationService,
                private loaderBlockService: LoaderBlockService,
                private changeDetectorRef: ChangeDetectorRef,
                private router: Router) { }

    public login(): void {
        this.loaderBlockService.show();
        this.authorizationService.login(this.userLogin, this.userPassword)
            .subscribe((result) => {
                if (result) {
                    this.router.navigate(['/courses']);
                } else {
                    this.changeDetectorRef.markForCheck();
                }
                this.loaderBlockService.hide();
            });
    }
}
