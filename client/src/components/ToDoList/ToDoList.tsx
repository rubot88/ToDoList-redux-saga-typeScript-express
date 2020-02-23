import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ToDoListItem from '../ToDoListItem';

import { TodoListInterface, TodoInterface } from '../../interfaces';

import './ToDoList.scss'

const ToDoList = ({ todos, handleTodoRemove, handleTodoComplete }: TodoListInterface) => {
    const elements: React.ReactElement[] = todos.map((item: TodoInterface): React.ReactElement => {
        return (
            <CSSTransition
                timeout={800}
                classNames={'item'}
                key={item.id}>
                <li className="list-group-item ">
                    <ToDoListItem
                        todo={item}
                        handleTodoRemove={() => handleTodoRemove(item.id)}
                        handleTodoComplete={() => handleTodoComplete(item.id)}
                    />

                </li>
            </CSSTransition>
        )
    })
    return (
        <TransitionGroup
            component="ul"
            className="list-group todo-list">
            {elements}
        </TransitionGroup>
    );
};

export default ToDoList;