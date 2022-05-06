import { useSelector } from 'react-redux';
import { remove, todoSelector } from '../../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

export default function ReduxTodoList() {
  const tasks = useSelector(todoSelector);
  const dispatch = useDispatch();

  return (
    <ul className='list'>
      { tasks.map( task => {
        return (
          <li key={task.id} onClick={ () => dispatch(remove({id: task.id})) }>
            { task.title }</li>
        ) 
      })}
    </ul>
  )
}