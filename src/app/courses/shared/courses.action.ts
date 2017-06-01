import { ICourse } from './';
import { Action } from '@ngrx/store';

export const GET_COURSES = 'GET_COURSES';
export const CLEAR_COURSES = 'CLEAR_COURSES';
export const DELETE_COURSES = 'DELETE_COURSES';

export class AddToCoursesAction implements Action {
    public type: string = GET_COURSES;
    constructor(public payload: ICourse[]) {
    }
}
export class ClearCoursesAction implements Action {
    public type: string = CLEAR_COURSES;    
}

export class DeleteCoursesAction implements Action {
    public type: string = DELETE_COURSES;
    constructor(public payload: number) {
    }    
}
