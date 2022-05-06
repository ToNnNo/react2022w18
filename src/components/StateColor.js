import { useState } from "react"

export default function StateColor() {
  const [color, setColor] = useState('transparent');
  const [example, setExample] = useState({id:1, name: 'John'});

  function changeColor(e) {
    setColor( e.target.dataset.color );
  }

  return (
    <>
      <h2>useState Color</h2>

      <div style={{ marginBottom: '10px'}}>
        <button onClick={ changeColor } data-color='red'>
          Rouge</button>
        <button onClick={ changeColor } data-color='blue'>
          Bleu</button>
        <button onClick={ changeColor } data-color='limegreen'>
          Vert</button>
      </div>

      <div style={{
        width: '100px',
        height: '100px',
        border: '1px solid #000',
        backgroundColor: color,
        borderRadius: '5px'
      }}></div>
    </>
  )
}