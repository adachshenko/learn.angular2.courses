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
        this.courses = [{
            id: 1,
            name: 'Learn HTML & CSS',
            duration: 120,
            date: 121,
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'

        },
        {
            id: 2,
            name: 'Learn JavaScript Basics',
            duration: 120,
            date: 121,
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'

        },
        {
            id: 3,
            name: 'Learn Angular 2',
            duration: 120,
            date: 121,
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'

        }];
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


