import React from 'react';

import ToDoListItem from '../ToDoListItem';

import { TodoListInterface, TodoInterface } from '../../interfaces';

import './ToDoList.scss'

const ToDoList = ({ todos, handleTodoRemove, handleTodoComplete }: TodoListInterface) => {
    const elements: React.ReactElement[] = todos.map((item: TodoInterface): React.ReactElement => {
        return (
            <li key={item.id}
                className="list-group-item">
                <ToDoListItem
                    todo={item}
                    handleTodoRemove={() => handleTodoRemove(item.id)}
                    handleTodoComplete={() => handleTodoComplete(item.id)}
                />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;