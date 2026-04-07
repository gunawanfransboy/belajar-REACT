import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


// function CallName({ name, address, gender }) { // //props : properti
//   return <h1>Panggil Aku {name} </h1>
// }

// function CallName(props) { // //props : properti
//   return (
//     <>
//       <h1>Panggil Aku {props.name}, </h1>
//       <p> alamat aku {props.address} </p>
//       <p> jenis kelamin {props.gender} </p>

//     </>
//   );
// }

// function User({ user }) {
//   return (
//     <>
//       <h1>Nama {user.name}</h1>
//       <p>Phone {user.phone}</p>
//     </>
//   );
// }


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/dashboard' element={<DashboardPage />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
