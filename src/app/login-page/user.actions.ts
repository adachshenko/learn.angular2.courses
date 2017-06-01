import { Action } from '@ngrx/store';

export const UserActionTypes = {
    ADD_USER_TOKEN: 'ADD_USER_TOKEN',
    ADD_USER_INFO: 'ADD_USER_INFO'
};

export class AddTokenAction implements Action {
    public type: string = UserActionTypes.ADD_USER_TOKEN;
    constructor(public payload: string) {
    }
}

export class AddUserAction implements Action {
    public type: string = UserActionTypes.ADD_USER_INFO;
    constructor(public payload: {}) {
    }
}
