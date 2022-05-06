export default function EditUser() {

  const user = {
    name: 'John Doe',
    username: 'Johnny',
    email: "john.doe@gmail.com",
    phone: "06 118 218 00",
    address: {
      street: 'rue des canonnier',
      suite: '46 et 48',
      city: 'Lille',
      zipcode: '59800'
    }
  }

  function submit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    /*console.log(formData);
    for(let [index, value] of formData.entries()){
        console.log(`${index} : ${value}`);
    }*/
    const data = JSON.stringify(Object.fromEntries(formData));
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => res.json())
      .then(user => console.log(user));
  }

  return (
    <form onSubmit={submit}>
      <div style={{marginBottom: '10px'}}>
        <label htmlFor="name">Nom:</label>
        <input type="text" name="name" id="name" className="form-control" defaultValue={user.name ?? undefined} />
      </div>
      <div style={{marginBottom: '10px'}}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" className="form-control" defaultValue={user.username ?? undefined}  />
      </div>
      <div style={{marginBottom: '10px'}}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" className="form-control" defaultValue={user.email ?? undefined} />
      </div>
      <div style={{marginBottom: '10px'}}>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" id="phone" className="form-control" defaultValue={user.phone ?? undefined} />
      </div>
      <button type="submit">Sauvegarder</button>
    </form>
  );
}
