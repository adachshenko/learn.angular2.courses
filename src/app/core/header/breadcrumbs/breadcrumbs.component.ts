import {
    Component,
    ChangeDetectionStrategy,
    OnDestroy,
    ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BreadcrumbsService } from '../../services/index';

@Component({
    selector: 'breadcrumbs-component',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class BreadCrumbsComponent implements OnDestroy {

    public courseName;
    private courseNameSubscription: Subscription;

    constructor(private breadcrumbsService: BreadcrumbsService,
                private changeDetectionRef: ChangeDetectorRef) {
        this.courseNameSubscription =
            this.breadcrumbsService.courseName.subscribe((courseName) => {
                this.courseName = courseName;
                this.changeDetectionRef.markForCheck();
            });
    }

    public ngOnDestroy(): void {
        this.courseNameSubscription.unsubscribe();
    }
}
