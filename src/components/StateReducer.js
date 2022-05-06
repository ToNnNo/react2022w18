import { useReducer } from "react";

function reducer(state, action) {
  const step = action.step ?? 1;
  switch(action.type) {
    case 'increase': 
      return { count: state.count + step };
    case 'decrease': 
      return { count: state.count - step };
    default:
      break;
  }
}

export default function StateReducer() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <>
      <h2>Reducer Compteur</h2>

      <button onClick={() => { dispatch({ type: 'decrease', step: 2 }) }}>
        Diminuer</button>
      <span style={{margin: '0 10px'}}>{ state.count }</span>
      <button onClick={() => { dispatch({ type: 'increase' }) }}>
        Augmenter</button>

    </>
  )
}