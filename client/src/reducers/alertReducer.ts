
import initialAlertState from '../store/initialAlertState';
import createReducer from '../utils/reducerCreator';
import { types } from '../utils/actionCreator';
import {
    ReducerHandlersInterface,
    AlertStateInterface,
    ActionInterface
} from '../interfaces';

const handlers: object = {
    [types.ALERT.SHOW_ALERT](_: AlertStateInterface, { payload }: ActionInterface) {
        return {
            ...payload as AlertStateInterface
        }
    },
    [types.ALERT.HIDE_ALERT](_: AlertStateInterface, { payload }: ActionInterface) {
        return {
            message: '',
            type: ''
        }
    }
};

export default createReducer(initialAlertState, handlers as ReducerHandlersInterface);