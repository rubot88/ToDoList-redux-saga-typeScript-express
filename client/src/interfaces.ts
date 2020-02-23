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


export interface AlertStateInterface {
    message: string;
    type?: string;
};

export interface TodoStateInterface {
    todos: TodoInterface[];
    loading: boolean;
};

export interface StateInterface {
    todo: TodoStateInterface;
    alert: AlertStateInterface;
}

// action creators
export interface ActionInterface {
    type: string;
    payload?: string | TodoInterface[] | TodoInterface | AlertStateInterface;
};


export interface ActionTypeInterface {
    [key: string]: (payload?: string | AlertStateInterface) => ActionInterface;
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
    [key: string]: (state: TodoStateInterface | AlertStateInterface, action: ActionInterface) => TodoStateInterface | AlertStateInterface;
}
