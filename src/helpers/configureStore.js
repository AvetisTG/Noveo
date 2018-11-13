import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";

export default (rootReducer, rootSaga) => {

    let store;

    const sagaMiddleware = createSagaMiddleware();

    const logger = createLogger({
        collapsed: false,
        stateTransformer: state => state.toJS()
    });

    store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

    sagaMiddleware.run(rootSaga);

    return store;
};
