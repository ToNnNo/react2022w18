import Header from "../components/Header";
import { useState } from 'react';

export default function Formulaire() {
  const [user, setUser] = useState({ nom: 'Doe', prenom: 'John', message: '', sujet: '', terms: true });

  function submit(e) {
    e.preventDefault();

    console.log(user);
  }

  function changeData(e) {
    const target = e.target;
    user[target.name] = (target.type === 'checkbox') ? target.checked: target.value.trim();

    setUser( { ...user } ); // Object.assign(user, {})
  }

  return (
    <>
      <Header title="Formulaire Controllé" />

      <form onSubmit={submit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input type="text" name="nom" id="nom" value={user.nom} onChange={changeData} />
        </div>
        <div>
          <label htmlFor="prenom">Prénom:</label>
          <input type="text" name="prenom" id="prenom" value={user.prenom} onChange={changeData} />
        </div>
        <div>
          <label htmlFor="sujet">Sujet:</label>
          <select name="sujet" id="sujet" value={user.sujet} onChange={changeData}>
            <option value="reclamation">Réclamation</option>
            <option value="demande-information">Demande d'information</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" value={user.message} onChange={changeData} />
        </div>
        <div>
          <input type="checkbox" name="terms" id="terms" checked={user.terms} onChange={changeData} />
          <label htmlFor="terms">Valider les conditions Générales d'Utilisation</label>
        </div>
        <button type="submit">Sauvegarder</button>
      </form>
    </>
  )
}