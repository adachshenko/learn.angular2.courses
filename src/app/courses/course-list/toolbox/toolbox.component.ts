import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FilterByPipe } from '../../../shared/pipes/filter-by.pipe';
import { ICourse } from "../../shared/index";
import { Subscription } from "rxjs/Subscription";
import { CourseService } from "../../shared/course.service";

@Component({
    selector: 'toolbox-component',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.css']

})

export class ToolboxComponent {
    
    public filter: string = '';
    @Output() public find = new EventEmitter();

    public findCourse(): void {
        console.log(this.filter);
        this.find.emit(this.filter);
    }
}
