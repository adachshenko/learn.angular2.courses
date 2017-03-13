import {
    Component,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChange
} from '@angular/core';
import { ICourse } from '../shared/course.model';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']

})



export class CourseListComponent implements
    OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy {

    public courses;

    constructor() {
        this.courses = [];
    }

    printId($event) {
        console.log($event);
    }
    ngOnInit() {
        this.courses = [
           new Course (2, 'Learn JavaScript Basics', 120, new Date(), 
           'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'),
    
        new Course (3, 'Learn JavaScript Basics', 120, new Date(), 
           'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'),
           
           new Course (3, 'Learn JavaScript Basics', 120, new Date(), 
           'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj')];
        console.log('OnInit!');
    }

    ngOnChanges() { console.log('OnChanges!'); }

    ngDoCheck() { console.log('DoCheck!'); }

    ngAfterContentInit() { console.log('AfterContentInit!'); }

    ngAfterContentChecked() { console.log('AfterContentChecked'); }

    ngAfterViewInit() { console.log('AfterViewInit'); }

    ngAfterViewChecked() { console.log('AfterViewChecked'); }

    ngOnDestroy() { console.log('OnDestroy'); }

    
}

class Course implements ICourse {

    constructor(public id: number, public name: string, public duration: number,
                public date: Date, public description: string) {

    }
}


