import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { countSelector, decrease, increase } from "../features/counter/counterSlice";

export default function ReduxCounter() {
  const counter = useSelector( countSelector )
  const dispatch = useDispatch();
  const [step, setStep] = useState(counter.step);

  return (
    <>
      <h3>Counter</h3>

      <p>{ counter.value }</p>
      <button onClick={ () => { dispatch(decrease({step})) } }> - {step} </button>
      <button onClick={ () => { dispatch(increase({step})) } }> + {step} </button>

      <div style={{marginTop: '10px'}}>
        <input type="number" value={step} onChange={ e => setStep(Number(e.target.value)) } />
      </div>
    </>
  )
}