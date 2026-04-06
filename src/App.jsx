import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Todolist from './components/Todolist.jsx';


// function CallName({ name, address, gender }) { // //props : properti
//   return <h1>Panggil Aku {name} </h1>
// }

function CallName(props) { // //props : properti
  return (
    <>
      <h1>Panggil Aku {props.name}, </h1>
      <p> alamat aku {props.address} </p>
      <p> jenis kelamin {props.gender} </p>

    </>
  );
}

function User({ user }) {
  return (
    <>
      <h1>Nama {user.name}</h1>
      <p>Phone {user.phone}</p>
    </>
  );
}

function App() {

  return (
    <>
      <Todolist />
    </>

  );
}

export default App
