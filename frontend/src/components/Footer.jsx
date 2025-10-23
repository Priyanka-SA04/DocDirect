{/* Footer is mounted so that its visible in all the pages */}
import React from 'react'
import { assets } from '../assets/assets_frontend/assets.js'


const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*--------Left Section----------- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=""/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto helps you connect with trusted doctors anytime, anywhere. Book appointments, consult specialists, and manage your health with ease — all in one secure platform.</p>

            </div>

            {/*--------Center Section----------- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>   
            </div>

            {/*--------Right Section----------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+124-3764-64716</li>
                    <li>prescripto@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <div>
            {/*--------Copyright Text----------- */}
            <hr></hr>
            <p className='py-5 text-sm text-center'>© 2025 DocApp. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Footer