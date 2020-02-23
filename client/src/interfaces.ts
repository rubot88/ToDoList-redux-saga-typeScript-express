export interface TodoInterface {
    id: string;
    label: string;
    isCompleted: boolean;
};

export interface TodoFormInterface {
    label: string;
    onLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export interface TodoListInterface {
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    todos: TodoInterface[];
};

export interface TodoItemInterface {
    handleTodoRemove: () => void;
    handleTodoComplete: () => void;
    todo: TodoInterface;
};


export interface AlertInterface {
    message: string;
    type?: string;
};

export interface StateInterface {
    todos: TodoInterface[];
    loading: boolean;
    error: AlertInterface | null;
};

export interface InitialStateInterface {
    todo: StateInterface
}
// action creators
export interface ActionInterface {
    type: string;
    payload?: string | TodoInterface[] | TodoInterface | AlertInterface;
};


export interface ActionTypeInterface {
    [key: string]: (payload?: string | AlertInterface) => ActionInterface;
}
export interface ActionTypesInterface {
    [key: string]: ActionTypeInterface;
}

// types
export interface AsyncTypeInterface {
    [key: string]: string;
};
export interface TypesInterface {
    [key: string]: AsyncTypeInterface;
};


// reducer
export interface ReducerHandlersInterface {
    [key: string]: (state: StateInterface, action: ActionInterface) => StateInterface;
}
