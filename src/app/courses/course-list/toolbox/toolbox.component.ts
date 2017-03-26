import { Component } from '@angular/core';

@Component({
    selector: 'toolbox-component',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.css']

})

export class ToolboxComponent {
    public filter: string = '';

    public findCourse(): void {
        console.log(this.filter);
    }
}
