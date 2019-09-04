import createSagaMiddleare from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleaware = createSagaMiddleare({ sagaMonitor });

const middlewares = [sagaMiddleaware];
const store = createStore(rootReducer, middlewares);

sagaMiddleaware.run(rootSaga);

export default store;
