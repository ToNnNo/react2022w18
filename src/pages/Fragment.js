import DataList from "../components/DataList/DataList";
import Header from "../components/Header";

export default function Fragment() {
  const items = [
    { id: 1, title: 'HTML', description: 'HyperText Markup Language' },
    { id: 2, title: 'CSS', description: 'Cascading Style Sheets' },
    { id: 3, title: 'JS', description: 'JavaScript' },
    { id: 4, title: 'ES', description: 'EcmaScript' },
  ];

  return (
    <>
      <Header title="Les Fragments" />

      <DataList items={items} />

      <p>Exemple de data list HTML</p>
      <dl className="dl">
        <dt>title 1</dt>
        <dd>description 1</dd>
        <dt>title 2</dt>
        <dd>description 2</dd>
      </dl>
    </>
  );
}