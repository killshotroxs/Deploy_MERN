import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState([])
  const [age, setAge] = useState([])
  axios.defaults.withCredentials = "true";



   useEffect(()=>{
    axios.get("deploy-mern-api-seven.vercel.app/getUsers")
    .then((users)=>{
     setUsers(users.data)
    }).catch(err => console.log(err))
   }, [])

   const Submit = () => {
    axios.post("deploy-mern-api-seven.vercel.app/createUser", {name,age})
    .then((users)=>{
     console.log(users)
    }).catch(err => console.log(err))

   }


  return (
    <div className='center'>
    <h2>First MERN(MongoDB, Express, React, Node) App</h2>
    {
      users.map(user => {
        return <div>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
        </div>
      })
    }
    <br/>
    <input type='text' onChange={(e)=>setName(e.target.value)}/>
    <input type='text' onChange={(e)=>setAge(e.target.value)}/>
    <button onClick={Submit}>Create User</button>

    </div>
    
  )
}

export default App
