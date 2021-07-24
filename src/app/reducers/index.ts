import { combineReducers } from 'redux';

import prefsReducer from './prefs';

const rootReducer = combineReducers({prefs: prefsReducer });
export { rootReducer, prefsReducer };
