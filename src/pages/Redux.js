import Header from "../components/Header";
import ReduxCounter from "../components/ReduxCounter";
import ReduxTodoList from '../components/ReduxTodo/ReduxTodoList';
import ReduxTodoForm from '../components/ReduxTodo/ReduxTodoForm';

export default function Redux() {

  return (
    <>
      <Header title="Redux" />

      <ReduxCounter />

      <h3>Exercice Todo List avec Redux</h3>
      <div className="row">
        <div className="col-3">
          <ReduxTodoList />
        </div>
        <div className="col-9">
          <ReduxTodoForm />
        </div>
      </div> 
    </>
  )
}