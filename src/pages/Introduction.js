import Hello from "../components/Hello";
import Welcome from "../components/Welcome";
import { Number } from '../formatters/Number';
import Header from '../components/Header';
import Notification from "../components/Notification/Notification";
import UselessButton from "../components/UselessButton";
import UselessClass from "../components/UselessClass";

export default function Introduction() {
    const name = "Stéphane";
    const html = "<script>alert('attack')</script>";

    const safeHtml = `Hello <b>${name}</b>`;

    const messages = []; //['Formation', 'React', 'Dawan'];

    const fruits = ["Pomme", "Poire", "Banane", "Cerise", "Litchi", "Orange"];

    const participants = ["Sovann", 'Damien', 'Carl', 'Gilles', 'Stéphane'];

    console.log(fruits);

    function handleClick() {
        const message = 'Merci de votre confiance :D';
        alert(message);
    }

    /**
     * <header>
     *  <h1>title</h1>
     *  <hr />
     * </header>
     */

    console.log(Boolean('false')); // bad work!

    return (

<div>
    <Header title="Introduction" />

    <Notification />

    <Welcome />

    <p>1 + 2 = { 1 + 2 }</p>

    <p>Hello { name }</p>

    <p>Population en France: { Number(67390000.99) }</p>

    <p>{ html }</p>

    <p dangerouslySetInnerHTML={{ __html: safeHtml}} />

    <Hello />
    <Hello name="Sovann" />
    <Hello name={name} />

    <h3>Condition</h3>

    {
        messages.length > 0 ?
        <p>Vous avez { messages.length } nouveaux messages</p>:
        <p>Aucun nouveau message</p>
    }

    <h3>Boucle</h3>
    
    <p>{ fruits.join(', ') }</p>
    
    <ul>
        { fruits.map( (fruit, index) => <li key={index}>{ fruit }</li> ) }
    </ul>

    { participants.map( (name, index) => <Hello key={index} name={name} /> )}

    <h3>Evènements</h3>
    <div>
        <button onClick={handleClick}>Déclencher une fonction</button>
    </div>
    <div>
        <button onClick={() => { alert('Est ce que cela fonctionne ?') } }>
            Faisons appel à alert()</button>
    </div>
    <div>
        <button onClick={(e) => {
            console.log(e);
        }}>Voir l'évènement</button>
    </div>
    <div>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a href="#" onClick={(event) => {
            event.preventDefault();
            window.confirm('Etes vous sur de vouloir valider cette commande ?');
        }}>Valider la commande</a>
    </div>

    <div>
        <UselessButton />
    </div>

    <div>
        <UselessClass version="2.5" />
    </div>
</div>

    );
}