import { tassign } from 'tassign';
import { SIGN_UP_ATTEMPT} from './actions';

import { ISession } from '../../interfaces/session/session.interface';

export interface IHomePageState {
    signUpAttempt: boolean;
}

export const HOME_PAGE_INITIAL_STATE: IHomePageState = {
    signUpAttempt: false
}

const signUpToggle = (state, action) => {
    return tassign( state, {
        signUpAttempt: action.signUpAttempt
    });
}

export function homePageReducer(state: IHomePageState = HOME_PAGE_INITIAL_STATE, action): IHomePageState {
    switch (action.type){
        case SIGN_UP_ATTEMPT: return signUpToggle(state, action);
    }
    return state;
}

