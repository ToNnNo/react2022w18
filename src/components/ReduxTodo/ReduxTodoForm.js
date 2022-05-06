import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../features/todo/todoSlice';

export default function ReduxTodoForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);
  const input = useRef('');

  function handleChange(e) {
    setTask(e.target.value);
    setError(e.target.value.trim() === '');
  }

  function submit(e) {
    e.preventDefault();
    setError(task.trim() === '');
    
    if(task.trim() !== '') {
      dispatch(add({task}));
      setTask('');
      setError(false);
      input.current.focus();
    }
  }

  return (
    <form onSubmit={ submit }>
      <div className="input-group">
        <input type="text" name="task" className='form-control' placeholder='Entrer une tache' 
          onChange={ handleChange } onBlur={ handleChange } value={task} ref={input} />
        <button type='submit'>Ajouter</button>
      </div>
      { error && <p className='text-error'>Obligatoire</p>}
    </form>
  )
}