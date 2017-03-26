import {
    Component,
    Input
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})

export class HeaderComponent {

    constructor(public authorizationService: AuthorizationService,
                private router: Router) {
    }

    public logout(event: Event) {
        event.preventDefault();
        if (this.authorizationService.logout()) {
            this.router.navigate(['/courses']);
        }
    }
}
