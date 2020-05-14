import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from 'app/src/redux/sagas';
import rootReducer from 'app/src/redux/reducers';

const sagaMiddleware = createSagaMiddleware();

export default function getStore() {
    const store = createStore( rootReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSagas);

    return store;
}
