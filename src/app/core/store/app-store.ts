import { ICourse } from './../../courses/shared';

export interface AppStore {
    userInfo: {};
    userToken: string;
    courses: ICourse[];
}

export const DEFAULT_VALUES = {
    userInfo: {},
    userToken: '',
    courses: []
};
