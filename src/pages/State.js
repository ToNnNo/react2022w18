import Counter from "../components/Counter";
import Header from "../components/Header";
import Color from '../components/Color';
import Clock from '../components/Clock';

export default function State() {
  return (
    <>
      <Header title="L'état local" />

      <Counter />

      <Color />

      <Clock />
    </>
  )
}