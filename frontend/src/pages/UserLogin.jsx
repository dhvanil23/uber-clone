import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/user/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className='flex flex-col justify-between p-7 text-xl h-screen'>
      <div className='max-h-1/2'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-1/4 pt-7 pl-3'/>
        <form className='flex flex-col mt-20 p-3' onSubmit={submitHandler} method='POST'>
          <h3 className='font-bold'> What's your email?</h3>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email@example.com' className='border-2 p-2 mt-3 rounded-lg bg-gray-200 cursor-text' />
          <h3 className='font-bold mt-5'> Enter Password</h3>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' className='border-2 p-2 mt-3 rounded-lg bg-gray-200' />
          <button type='submit' className='bg-black text-white w-full mt-7 mb-3 p-2 rounded-xl cursor-crosshair'>Login</button>
          <p className='text-base text-center font-medium'> New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p> 
        </form>
      </div>
      <div>
        <button type='submit' className='bg-green-600 text-white font-bold w-full mb-20 p-2 rounded-xl cursor-crosshair'>Sign in as Driver</button>
      </div>
    </div>
  )
}

export default UserLogin
