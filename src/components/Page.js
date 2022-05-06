import Header from './Header';

export default function Page(props) {

  return (
    <>
      <Header title={props.title} />
      <div className='row'>
        <div className='col-3'>
          { props.leftContent}
        </div>
        <div className='col-9'>
          { props.children }
        </div>
      </div>
    </>
  )

}