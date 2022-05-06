export default function Hello(props) {
    /*let name = props.name;
    if( !name ) {
        name = 'World';
    } */

    const { name = 'World'} = props 

    return <p>Hello {name} !</p>
}