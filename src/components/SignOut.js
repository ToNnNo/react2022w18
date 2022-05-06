import Hello from "./Hello";

export default function SignOut(props) {

    return (
        <>
            <Hello name="James" />
            <button onClick={() => props.fn(false)}>
                Déconnexion</button>
        </>
    )
  }