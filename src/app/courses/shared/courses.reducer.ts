import { ICourse } from './course.model';
import { Action } from '@ngrx/store';
import { GET_COURSES } from './courses.action';

export function getCoursesReducer(store: ICourse[], action: Action) {
    switch (action.type) {
        case GET_COURSES:
            return action.payload;
        default:
            return store;
    }
}

