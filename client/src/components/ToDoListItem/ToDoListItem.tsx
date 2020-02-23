import React from 'react';

import { TodoItemInterface } from '../../interfaces';

import './ToDoListItem.scss';

const ToDoListItem = (props: TodoItemInterface) => {
    const { todo: { label, isCompleted }, handleTodoRemove, handleTodoComplete } = props;
    let classNames = "todo-list-item";
    if (isCompleted) classNames += ' done';
    return (
        <span className={classNames}>
            <span className="todo-list-item-label"
                onClick={handleTodoComplete}>
                {label}
            </span>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={handleTodoRemove}>
                Del
            </button>
        </span>
    );
}

export default ToDoListItem;