import { ICourse } from './course.model';
import { Action } from '@ngrx/store';
import { GET_COURSES, CLEAR_COURSES, DELETE_COURSES } from './courses.action';

export function getCoursesReducer(store: ICourse[], action: Action) {
    switch (action.type) {
        case GET_COURSES:
            return store.concat(action.payload);
        case CLEAR_COURSES:
            return [];
        case DELETE_COURSES:
            return store.filter((course: ICourse) => action.payload !== course.id);
        default:
            return store;
    }
}

