
import { all, fork } from 'redux-saga/effects';

import todoWatcher from './todoSaga';

export default function* rootSaga() {
    yield all([
        fork(todoWatcher)
    ]);
};