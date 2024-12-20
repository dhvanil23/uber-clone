import React from 'react'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between flex-col h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1647424825116-fbf8b9415fc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D')]">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-1/3 pt-7 pl-7'/>
        <div className='text-2xl font-bold w-screen bg-white px-6 py-6'>
          <h2 className='w-full text-center text-bold'>Get Started With Uber</h2>
          <button onClick={() => {navigate('/login')}} className='bg-black text-white w-full mt-3 mb-3 p-2 rounded-xl'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage