import {
    ActionInterface,
    ReducerHandlersInterface,
    AlertStateInterface,
    TodoStateInterface
} from '../interfaces';

const createReducer =
    (initialState: AlertStateInterface | TodoStateInterface, handlers: ReducerHandlersInterface) =>
        (state = initialState, action: ActionInterface): ReducerHandlersInterface | AlertStateInterface | TodoStateInterface =>
            handlers.hasOwnProperty(action.type)
                ? handlers[action.type](state, action)
                : state;

export default createReducer;