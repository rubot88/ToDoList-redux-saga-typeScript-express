import {
    AsyncTypeInterface,
    TypesInterface,
    ActionTypeInterface,
    ActionTypesInterface
} from '../interfaces';

const asyncTypes: Array<string> = [
    'REQUEST',
    'SUCCESS',
    'FAILED'
];

const asyncActionTypes: Array<string> = [
    'FETCH_TODOS',
    'REMOVE_TODO',
    'ADD_TODO',
    'UPDATE_TODO'
];

const syncTypes: Array<string> = [
    'SHOW_ALERT',
    'HIDE_ALERT'
];
const syncActionTypes: Array<string> = [
    'ALERT'
];


const createAsyncTypes = (typeString: string) =>
    asyncTypes.reduce((type: AsyncTypeInterface, key: string): AsyncTypeInterface => {
        type[key] = `${typeString}_${key}`;
        return type;
    }, {});

const createAsyncActions = (typeString: string) =>
    asyncTypes.reduce((type: ActionTypeInterface, key: string): ActionTypeInterface => {
        type[key] = (payload) => ({ type: `${typeString}_${key}`, payload });
        return type;
    }, {});

const createTypes = (typeString: string) =>
    syncTypes.reduce((type: AsyncTypeInterface, key: string): AsyncTypeInterface => {
        type[key] = key;
        return type;
    }, {});

const createActions = (typeString: string) =>
    syncTypes.reduce((type: ActionTypeInterface, key: string): ActionTypeInterface => {
        type[key] = (payload) => ({ type: key, payload });
        return type;
    }, {});




export const actions: ActionTypesInterface = {};
export const types: TypesInterface = {};

asyncActionTypes.forEach((type: string) => {
    actions[type] = {
        ...createAsyncActions(type)
    };
    types[type] = {
        ...createAsyncTypes(type)
    };
});

syncActionTypes.forEach((type: string) => {
    actions[type] = {
        ...createActions(type)
    };
    types[type] = {
        ...createTypes(type)
    };
});
console.log('actions', actions);
console.log('types: ', types);
