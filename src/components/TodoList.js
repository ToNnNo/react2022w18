import { useReducer, useRef, useState } from 'react';

function TodoReducer(state, action){
  const tasks = state.tasks;
  
  switch(action.type){
    case 'add':
      return { tasks: [...tasks, action.task] };
    case 'remove':
      return { tasks: tasks.filter( (task, index) => index !== action.index ) };
    default:
      return { tasks }
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(TodoReducer, { tasks: ['Hello', 'World'] });
  const [task, setTask] = useState('');
  const input = useRef('');

  function submit(e) {
    e.preventDefault();
    dispatch({ type: 'add', task });
    setTask('');
    input.current.focus();
  }
  
  return (
    <div className='row'>
      <div className='col-3'>
        <ul className='list'>
          { state.tasks.map( (task, index) => {
            return <li key={index} onClick={ () => dispatch({ type: 'remove', index }) }>{ task }</li>
          })}
        </ul>
      </div>
      <div className='col-9'>
        <form onSubmit={submit}>
          <div className='input-group'>
            <input type="text" name="task" className='form-control' 
              placeholder='Entrer une tache' onChange={(e) => { setTask(e.target.value) }} value={task} ref={input} />
            <button type='submit'>Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  )
}