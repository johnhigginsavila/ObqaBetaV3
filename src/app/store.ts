import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { homePageReducer, IHomePageState, HOME_PAGE_INITIAL_STATE } from './pages/home/store';
import { globalReducer, IGlbalState, GLOBAL_INITIAL_STATE } from './global-store/store';

import { ISession } from './interfaces/session/session.interface';

export interface IAppState {
    global: IGlbalState;
    homePage: IHomePageState;
}

export const INITIAL_STATE: IAppState = {
    global: GLOBAL_INITIAL_STATE,
    homePage: HOME_PAGE_INITIAL_STATE
}


export const rootReducer = combineReducers<IAppState>({
    global: globalReducer,
    homePage: homePageReducer
    
});



//application wide interface, state, reducer

