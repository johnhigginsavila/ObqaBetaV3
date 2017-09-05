import { tassign } from 'tassign';
import { GET_CSRF, SIGNED_UP, LOGED_IN, CHECK_SESSION, CLEAR_SESSION, SET_ACTIVE_PAGE } from './actions';

import { ISession } from '../interfaces/session/session.interface';

export interface IGlbalState {
    session: ISession;
    page: string;
    signedUp:{
        status:boolean;
        message:string;
    };
    logedIn:{
        status: boolean;
        message: string;
    };
    _csrf: string;
}

export const GLOBAL_INITIAL_STATE: IGlbalState = {
    session: null,
    page: null,
    signedUp:null,
    logedIn:null,
    _csrf: null
}

const setActivePage = (state, action) => {
    return tassign(state, {
        session: state.session,
        page: action.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: state._csrf
    });
}

const checkSession = (state, action) => {
    return tassign(state, {
        session: action.session,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: state._csrf
    });
}

const clearSession = (state, action) => {
    return tassign(state, {
        session: null,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: state._csrf
    });
}

const getCsrf = (state, action) => {
    return tassign(state, {
        session: state.session,
        page: state.page,
        signedUp: state.signedUp,
        logedIn:state.logedIn,
        _csrf: action._csrf
    });
}

const signedUp = (state, action) => {
    return tassign( state, {
        session: action.session,
        page: state.page,
        signedUp: action.signedUp,
        logedIn: action.logedIn,
        _csrf: state._csrf
    });
}

const logedIn = (state, action) => {
    return tassign( state, {
        session: action.session,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: action.logedIn,
        _csrf: state._csrf
    })
}

export function globalReducer(state: IGlbalState = GLOBAL_INITIAL_STATE, action): IGlbalState {
    switch (action.type){
        case CHECK_SESSION: return checkSession(state, action);
        case CLEAR_SESSION: return clearSession(state, action);
        case GET_CSRF: return getCsrf(state, action);
        case SIGNED_UP: return signedUp(state, action);
        case LOGED_IN: return logedIn(state, action);
        case SET_ACTIVE_PAGE: return setActivePage(state, action);
    }
    return state;
}

