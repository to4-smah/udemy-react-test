import { createStore, combineReducers, applyMiddleware } from "redux";
import events from './events'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);

const appReducer = combineReducers({
    events
});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }
    return appReducer(state, action);
};

export default createStore(rootReducer, enhancer);
