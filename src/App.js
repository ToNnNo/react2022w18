import Main from "./router/Main";
import Nav from "./router/Nav";
import { useSelector } from 'react-redux';
import { countSelector } from "./features/counter/counterSlice";

function App() {
  const counter = useSelector( countSelector );

  return (
    <div className="container">
      <header>
        <h1>Formation React { counter.value }</h1>
      </header>
      <Nav />
      <main>
        <Main />
      </main>
      <footer>
        <hr />
        <p className="text-center">
          React - Dawan Lille + FOAD - Mai 2022
        </p>
      </footer>
    </div>
  );
}

export default App;
