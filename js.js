import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Name: ${name} Surname: ${surname}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email}
         onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name}
         onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Surname:
        <input type="text" value={surname} 
        onChange={(event) => setSurname(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
