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
import { AppStore } from '../store/app-store';
import { Store } from '@ngrx/store';
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
                private changeDetectionRef: ChangeDetectorRef,
                private store: Store<AppStore>) {
                this.userInfoSubscription = store.select('userInfo').subscribe((userInfo) => {
                    if (userInfo['name']) {
                        this.userInfo = `${userInfo['name'].first} ${userInfo['name'].last}`;
                        this.changeDetectionRef.markForCheck();
                    }
                });
                this.authorizationService.getUserInfo();
    }

    public logout(event: Event) {
        event.preventDefault();
        if (this.authorizationService.logout()) {
            this.router.navigate(['/login']);
        }
    }

    public ngOnDestroy(): void {
        this.userInfoSubscription.unsubscribe();
    }
}
