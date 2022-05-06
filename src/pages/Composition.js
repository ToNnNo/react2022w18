import Page from '../components/Page';
import DataList from '../components/DataList/DataList';
import Hello from '../components/Hello';
import Welcome from '../components/Welcome';

export default function Composition() {
  const items = [
    {id: 1, title: 'HTML', description: 'HyperText Markup Language'}
  ];

  return (
    <Page title="La composition" leftContent={ <DataList items={items} /> }>
      <Welcome />
      <p>Les composants qui utilisent la composition, 
        exploite la props spéciale <code>children</code>.</p>

      <Hello name="John Doe" />
    </Page>
  )
}