import './App.css';

import React, { useEffect, useRef, useState } from "react";


function Card({user}){
  return <div style={{display: 'flex', alignItems:'center', justifyContent:'center', border: '1px solid #000', gap:'10px'}}>
               <p>{user.id} -- </p>
               <p>{user.name} -- </p>
               <p>{user.username} -- </p>
               <p>{user.email}</p>
  </div>
}

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {

    try {
      setLoading(true)
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await data.json();
      setLoading(false)
      return users
    } catch (e) {
      console.log('ERROR!!', e);
    }
  }


  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])

  console.log('users', users);


  return (
    <div className="App">
      { loading ? 'Loading....' :
        users.map(user => (
          <Card key={user.id} user={user}  />
        ))
      }

    </div>
  );
}

export default App;
