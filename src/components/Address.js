export default function Address({ address }) {
  return (
    <address>
      { address.street } { address.suite }<br />
      { address.city} { address.zipcode }
    </address>
  )
}