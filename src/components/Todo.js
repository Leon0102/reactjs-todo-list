import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p
      onClick={() => toggleComplete(task.id)}
      className={`todo-text ${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}
        onClick={() => editTodo(task.id)}
         className='trash-icon' />
        <FontAwesomeIcon icon={faTrash}
        onClick={() => deleteTodo(task.id)}
         className='trash-icon' />
      </div>
    </div>
  );
}

export default Todo;
