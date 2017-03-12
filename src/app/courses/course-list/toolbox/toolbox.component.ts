import { Component } from '@angular/core';

@Component({
    selector: 'toolbox-component',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.css']

})

export class ToolboxComponent {
    public findCourse(filter): void {
        console.log(filter);
    }
}
