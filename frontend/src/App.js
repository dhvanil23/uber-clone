import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/getUserProfile' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
