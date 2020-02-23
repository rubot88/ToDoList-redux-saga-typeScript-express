import {
    StateInterface,
    ActionInterface,
    ReducerHandlersInterface
} from '../interfaces';

const createReducer =
    (initialState: StateInterface, handlers: ReducerHandlersInterface) =>
        (state = initialState, action: ActionInterface): ReducerHandlersInterface | StateInterface =>
            handlers.hasOwnProperty(action.type)
                ? handlers[action.type](state, action)
                : state;

export default createReducer;