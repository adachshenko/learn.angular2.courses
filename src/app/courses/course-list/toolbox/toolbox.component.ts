import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'toolbox-component',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class ToolboxComponent {
    public filter: string = '';

    public findCourse(): void {
        console.log(this.filter);
    }
}
