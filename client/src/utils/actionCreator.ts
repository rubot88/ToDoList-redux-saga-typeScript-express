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

const actionTypes: Array<string> = [
    'FETCH_TODOS',
    'REMOVE_TODO',
    'ADD_TODO',
    'UPDATE_TODO'
];

const createAsyncTypes = (typeString: string) =>
    asyncTypes.reduce((type: AsyncTypeInterface, key: string): AsyncTypeInterface => {
        type[key] = `${typeString}_${key}`;
        return type;
    }, {});

const createActions = (typeString: string) =>
    asyncTypes.reduce((type: ActionTypeInterface, key: string): ActionTypeInterface => {
        type[key] = (payload) => ({ type: `${typeString}_${key}`, payload });
        return type;
    }, {});

export const actions: ActionTypesInterface = {};
export const types: TypesInterface = {};

actionTypes.forEach((type: string): void => {
    actions[type] = {
        ...createActions(type)
    };
    types[type] = {
        ...createAsyncTypes(type)
    };
});