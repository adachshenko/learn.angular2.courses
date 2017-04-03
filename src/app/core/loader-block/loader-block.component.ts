import { Component } from '@angular/core';
import { LoaderBlockService } from './loader-block.service';

@Component({
    selector: 'loader-block',
    templateUrl: './loader-block.component.html',
    styleUrls: ['./loader-block.component.css']

})

export class LoaderBlockComponent {

    public show: boolean;

    public constructor(private loaderBlockService: LoaderBlockService) {
        this.loaderBlockService.active.subscribe((active: boolean) => {
            this.show = active;
        });
    }
}
