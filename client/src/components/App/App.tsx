import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { actions } from '../../utils/actionCreator';
import ToDoList from '../ToDoList';
import ItemAddForm from '../ItemAddForm';
import { Loader } from "../Loader/Loader";
import Alert from '../Alert';
import { StateInterface } from '../../interfaces';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const App = () => {

  const dispatch = useDispatch();

  const { todos, loading, message, type } = useSelector((state: StateInterface) => {
    const { todo: { todos, loading }, alert: { message, type } } = state;
    return {
      todos,
      loading,
      message,
      type
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(actions.FETCH_TODOS.REQUEST());
  }, [dispatch])

  const [label, setLabel] = useState('');
  const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLabel(event.target.value);
  }

  // remove item from todo list
  const handleTodoRemove = (id: string): void => {
    dispatch(actions.REMOVE_TODO.REQUEST(id));
  };

  // add item to todo list
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (label.trim()) {
      dispatch(actions.ADD_TODO.REQUEST(label));
      setLabel('');
    }
  };

  // change property "done" in array state.todoData by given id
  const onToggleDone = (id: string): void => {
    dispatch(actions.UPDATE_TODO.REQUEST(id))
  }

  return (
    <div className="todo-app">
      {message && <Alert message={message} type={type} />}
      <ItemAddForm
        label={label}
        onSubmit={onSubmit}
        onLabelChange={onLabelChange}
      />
      <div>
        {loading && <Loader />}
        <ToDoList
          todos={todos}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={onToggleDone}
        />
      </div>
    </div >
  );
};

export default App;