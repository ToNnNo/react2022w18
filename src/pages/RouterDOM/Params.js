import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import Hello from "../../components/Hello";
import capitalize from "../../formatters/Capitalize";

export default function Params() {
  const params = useParams();
  const [queryString, SetQueryString] = useSearchParams({ page : 1 });

  // console.log(queryString.get('page'));

  function prev() {
    let page = +queryString.get('page'); // Number(queryString.get('page'))
    page = (page > 1) ? page - 1 : 1;
    
    SetQueryString({ page });
  }

  function next() {
    let page = +queryString.get('page'); // Number(queryString.get('page'))
    page = (page < 2) ? page + 1 : 2;

    SetQueryString({ page });
  }

  const navlink = {
    border: '1px solid #ccc',
    backgroundColor: 'white',
    padding: '7px 10px',
    fontSize: '1rem',
    color: 'black',
    textDecoration: 'none'
  }

  return (
    <>
      <Hello name={capitalize(params.name)} />

      { queryString.get('page') === '1' && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus ea ratione quae nisi dignissimos quaerat, sequi autem, fugiat modi, quos iure impedit. Quisquam eveniet veritatis sed quasi veniam! Amet.</p> }
      { queryString.get('page') === '2' && <p>Expedita illo necessitatibus nam. Magnam, alias consequatur porro, autem doloremque a tempora, commodi perferendis eos repellat ut aperiam eveniet accusamus nulla cupiditate!</p> }

      <div className="group">
        <button onClick={ prev }>&laquo; Prev</button>
        <NavLink to="?page=1" style={navlink}>1</NavLink>
        <NavLink to="?page=2" style={navlink}>2</NavLink>
        <button onClick={ next }>Next &raquo;</button>
      </div>
    </>
  )
}