import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@redux/reducers';
import rootSaga from '@redux/sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;