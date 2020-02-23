import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { ActionInterface, TodoInterface, StateInterface } from '../interfaces';
import { types, actions } from '../utils/actionCreator';
import { baseURL } from '../constants/apiUrl';

function* fetchTodos() {
    try {
        const { data } = yield call(axios.get, baseURL);
        yield put(actions.FETCH_TODOS.SUCCESS(data));
    } catch (e) {
        yield put(actions.FETCH_TODOS.FAILED(e))
    }
}
function* removeTodo({ payload }: ActionInterface) {
    try {
        const { data } = yield call(axios.delete, `${baseURL}/remove/${payload}`);
        yield put(actions.FETCH_TODOS.SUCCESS(data));
    } catch (e) {
        yield put(actions.REMOVE_TODO.FAILED(e))
    }
}
function* addTodo({ payload }: ActionInterface) {
    const newTodo = { label: payload, isCompleted: false };
    try {
        const { data } = yield call(axios.post, `${baseURL}/add`, newTodo);;
        yield put(actions.FETCH_TODOS.SUCCESS(data));
    } catch (e) {
        yield put(actions.ADD_TODO.FAILED(e))
    }
}
function* updateTodo({ payload }: ActionInterface) {
    const todos = yield select((state: StateInterface) => state.todo.todos);
    const { label, ...body } = todos.find((todo: TodoInterface) => todo.id === payload);
    try {
        const { data } = yield call(axios.post, `${baseURL}/edit`, body);
        yield put(actions.FETCH_TODOS.SUCCESS(data));
    } catch (e) {
        yield put(actions.UPDATE_TODO.FAILED(e))
    }
}


export default function* todoWatcher() {
    yield takeLatest(types.FETCH_TODOS.REQUEST, fetchTodos);
    yield takeLatest(types.REMOVE_TODO.REQUEST, removeTodo);
    yield takeLatest(types.ADD_TODO.REQUEST, addTodo);
    yield takeLatest(types.UPDATE_TODO.REQUEST, updateTodo);
}