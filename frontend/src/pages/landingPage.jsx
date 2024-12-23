import React from 'react'
import { useNavigate } from 'react-router-dom';
import homepage_image from '../images/homepage_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row-reverse mt-20 w-full md:w-11/12 p-4 mx-auto rounded-xl shadow-2xl bg-purple-100">
        <img src={homepage_image} alt="" className="w-full md:w-1/2 object-cover rounded-xl mb-4 md:mb-0" />

        <div className="w-full md:w-1/2 px-4">
          <p className="text-2xl md:text-4xl font-bold font-yellow mb-4 mt-10">
            Ease your Investment
          </p>
          <p className='text-lg md:text-xl mt-10 mb-10 overflow-hidden text-ellipsis w-full break-words'>
            At FinPoint, we simplify your financial journey by bringing all aspects of finance and investment under one roof. Whether you're looking to manage your wealth, invest wisely, or plan for your future, we are here to guide you every step of the way. Take the first step toward securing your financial future. <br/><br/><b>Click below to book a free call with our experts.</b>
          </p>
          <button className="bg-black text-lg md:text-xl hover:bg-green-600 text-white p-3 md:p-5 items-center font-bold mt-4 rounded-xl flex" onClick={() => navigate('/bookCall')}>
            <FontAwesomeIcon icon={faPhone} className="mr-2 md:mr-4 text-yellow-300" />
            Book a free call
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage