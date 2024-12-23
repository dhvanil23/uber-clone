import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/user/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
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
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/FinPoint_logo_2018.png" alt="" className='w-1/4 pt-7 pl-3'/>
        <form className='flex flex-col mt-20 p-3' onSubmit={submitHandler} method='POST'>
          <h3 className='font-bold'> What's your name?</h3>
          <div className='flex gap-2'>
            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' id='firstName' className='border-2 w-1/2 mt-3 p-2 rounded-lg bg-gray-200 cursor-text text-justify text-base' />
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' id='lastName' className='border-2 w-1/2 mt-3 p-2 rounded-lg bg-gray-200 cursor-text text-justify text-base' />
          </div>
          <h3 className='font-bold mt-5'> What's your email?</h3>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder='email@example.com' className='border-2 p-2 mt-3 rounded-lg bg-gray-200 cursor-text' />
          <h3 className='font-bold mt-5'> Enter Password</h3>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder='password' className='border-2 p-2 mt-3 rounded-lg bg-gray-200' />
          <button type='submit' className='bg-black text-white w-full mt-7 mb-3 p-2 rounded-xl cursor-crosshair'>SignUp</button>
          <p className='text-base text-center font-medium'> Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p> 
        </form>
      </div>
      <div>
        <button type='submit' className='bg-green-600 text-white font-bold w-full mb-20 p-2 rounded-xl cursor-crosshair'>Sign in as Driver</button>
      </div>
    </div>
  )
}

export default UserSignup
