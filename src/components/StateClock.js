import { useEffect, useState } from "react"
import Time from "./Time";

export default function StateClock() {
  const [date, setDate] = useState(new Date());

  useEffect( () => {
    console.log('clock')
    const id = setInterval(() => {
      const date = new Date();
      // console.log(date)
      setDate(date);
    }, 1000);

    return () => {
      clearInterval(id);
    }
  });

  useEffect( () => {
    const time = document.querySelector('#time');
    const second = date.getSeconds();

    time.style.color = (second%2 === 0)? 'blueviolet': 'darkorange';
  }); 

  return (
    <>
      <h2>useState Clock</h2>

      <p id="time"><Time date={date} /></p>
    </>
  )
}