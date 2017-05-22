import {
    Component,
    Input,
    ChangeDetectionStrategy,
    OnDestroy,
    ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class HeaderComponent implements OnDestroy {

    public userInfo;
    private userInfoSubscription: Subscription;

    constructor(public authorizationService: AuthorizationService,
                private router: Router,
                private changeDetectionRef: ChangeDetectorRef) {
        this.userInfoSubscription =
            this.authorizationService.getUserInfo().subscribe((userInfo) => {
                console.log('hhhhhhhhhhhhhhhhhhhhhhh'+`${userInfo.name.first} ${userInfo.name.last}`);
                this.userInfo = `${userInfo.name.first} ${userInfo.name.last}`;
                this.changeDetectionRef.markForCheck();
            });
    }

    public logout(event: Event) {
        event.preventDefault();
        if (this.authorizationService.logout()) {
            this.router.navigate(['/courses']);
        }
    }

    public ngOnDestroy(): void {
      this.userInfoSubscription.unsubscribe();
    }
}
