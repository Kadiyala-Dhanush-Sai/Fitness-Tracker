import { useState } from 'react'
import Authentication from './pages/Authentication'
import Signup from './pages/Signup';
import './App.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserInfo from './pages/User';
import Blogs from './pages/Blogs';
import Contact from './pages/contact';
import Tutorials from './pages/Tutorials';
import Workouts from './pages/Workouts';
import Gym from './components/gym';
import Calisthenics from './components/calisthenics';
import CalTut from './components/calisthenics-tutorial';
import GymTut from './components/gym-tutorial';
import GetStarted from './pages/Getstarted';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<GetStarted/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Authentication/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/workouts" element={<Workouts/>}/>
            <Route path="/userinfo" element={<UserInfo/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/tutorials" element={<Tutorials/>}/>
            <Route path="/gym" element={<Gym/>}/>
            <Route path="/calisthenics" element={<Calisthenics/>}/>
            <Route path="/calisthenics/tutorial" element={<CalTut/>}/>
            <Route path="/gym/tutorial" element={<GymTut/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
