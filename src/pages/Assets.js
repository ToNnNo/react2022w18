import batman from '../assets/batman.jpg';
import mando from '../assets/mandalorian.jpg';

export default function Assets() {
  return (
    <>
      <div>
        <img src={batman} alt="logo batman" style={{ maxWidth: '100%' }} />
      </div>
      <div>
        <img src={mando} alt="affiche mandalorien" style={{ maxWidth: '100%' }} />
      </div>

      <h3>Dans <code>public/</code></h3>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/batman.jpg`} alt="logo batman" style={{ maxWidth: '100%' }} />
      </div>
    </>
  );
}