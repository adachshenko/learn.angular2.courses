import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoaderBlockService } from './loader-block.service';

@Component({
    selector: 'loader-block',
    templateUrl: './loader-block.component.html',
    styleUrls: ['./loader-block.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class LoaderBlockComponent {

    public show: boolean;

    public constructor(private loaderBlockService: LoaderBlockService,
                       private changeDetectorRef: ChangeDetectorRef) {
        this.loaderBlockService.active.subscribe((active: boolean) => {
            this.show = active;
            this.changeDetectorRef.markForCheck();

        });
    }
}
