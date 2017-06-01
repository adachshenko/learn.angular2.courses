import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';

export function userInfoReducer(store: string, action: Action) {
    switch (action.type) {
        case UserActionTypes.ADD_USER_INFO:
            return action.payload;
        default:
            return store;
    }
}

export function userTokenReducer(store: {}, action: Action) {
    switch (action.type) {
        case UserActionTypes.ADD_USER_TOKEN:
            return action.payload;
        default:
            return store;
    }

}
