import initialState from '../store/initialState';
import createReducer from '../utils/reducerCreator';
import { types } from '../utils/actionCreator'

import {
    ReducerHandlersInterface,
    StateInterface,
    ActionInterface
} from '../interfaces';

// wanted to use - 'handlers: ReducerHandlersInterface' but faced error - 'Index signatures are incompatible'.
const handlers: object = {
    [types.FETCH_TODOS.REQUEST](state: StateInterface) {
        return {
            ...state,
            loading: true,
            error: null
        }
    },
    [types.FETCH_TODOS.SUCCESS](_: StateInterface, { payload }: ActionInterface) {
        return {
            todos: payload,
            loading: false,
            error: null
        }
    },
    [types.FETCH_TODOS.FAILED](_: StateInterface, { payload }: ActionInterface) {
        return {
            todos: [],
            loading: false,
            error: payload
        }
    }
};

export default createReducer(initialState, handlers as ReducerHandlersInterface);