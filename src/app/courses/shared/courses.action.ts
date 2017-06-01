import { ICourse } from './';
import { Action } from '@ngrx/store';

export const GET_COURSES = 'GET_COURSES';

export class GetCoursesAction implements Action {
    public type: string = GET_COURSES;
    constructor(public payload: ICourse[]) {
    }
}

/*export class AddUserAction implements Action {
    public type: string = UserActionTypes.ADD_USER_INFO;
    constructor(public payload: {}) {
    }
}*/
