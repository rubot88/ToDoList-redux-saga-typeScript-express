import initialTodoState from '../store/initialTodoState';
import createReducer from '../utils/reducerCreator';
import { types } from '../utils/actionCreator'

import {
    ReducerHandlersInterface,
    TodoStateInterface,
    ActionInterface
} from '../interfaces';

// wanted to use - 'handlers: ReducerHandlersInterface' but faced error - 'Index signatures are incompatible'.
const handlers: object = {
    [types.FETCH_TODOS.REQUEST](state: TodoStateInterface) {
        return {
            ...state,
            loading: true
        }
    },
    [types.FETCH_TODOS.SUCCESS](_: TodoStateInterface, { payload }: ActionInterface) {
        return {
            todos: payload,
            loading: false
        }
    },
    [types.FETCH_TODOS.FAILED]() {
        return {
            todos: [],
            loading: false
        }
    }
};

export default createReducer(initialTodoState, handlers as ReducerHandlersInterface);