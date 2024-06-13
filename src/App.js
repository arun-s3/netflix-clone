import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signup';
import Login from './pages/Signin/Signup'
import Player from './pages/Player/Player';
import { useEffect, useContext } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';

function App() {

  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In")
        navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
        <Routes path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Signin/>}/>
          <Route path='player/:id' element={<Player/>}/>
        </Routes>
    </div>
  );
}

export default App;
