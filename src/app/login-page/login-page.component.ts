import { Component } from '@angular/core';
import { AuthorizationService } from '../core/authorization.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']

})

export class LoginPageComponent {

    public userLogin: string;
    public userPassword: string;

    constructor(private authorizationService: AuthorizationService,
                private router: Router) { }

    public login(): void {
        if (this.authorizationService.login(this.userLogin, this.userPassword)) {
            this.router.navigate(['/courses']);
        }
    }
}
