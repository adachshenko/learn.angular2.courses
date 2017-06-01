import { ICourse } from './../../courses/shared';

export interface AppStore {
    userInfo: {};
    userToken: string;
    /*courses: ICourse[];
    selectedCourse: ICourse;*/
}

export const DEFAULT_VALUES = {
    userInfo: null,
    userToken: '',
    courses: [],
    selectedCourse: null
};
