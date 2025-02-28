import React from 'react'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <>
    {/* Address */}
    <div className='w-11/12 mx-auto mt-10 grid sm:grid-cols-3 grid-cols-1 gap-x-5'>
      <div>
        <h2 className='text-[24px] text-red-700 font-semibold mb-4 underline underline-offset-8 decoration-gray-300'>School Address</h2>
        <h2 className='text-[24px] text-blue-900'>Bhondawe Patil Public School</h2>
        <p className='text-blue-700'>Gut No. 49, Bajaj Nagar,MIDC, <br />
          Waluj, Aurangabad – 431136. (MH). <br />
          Contact: 6232616161/ 6232717171 <br />
          Email: bhondawepatilschool@gmail.com</p>
      </div>

      {/* Quick link */}
      <div>
        <h2 className='text-[24px] text-red-700 font-semibold mb-4 underline underline-offset-8 decoration-gray-300'>Quick Links</h2>
        <ul className='item-center  flex flex-col gap-1.5 text-blue-800'>
          <Link to='/' className='hover:font-bold hover:text-red-500 hover:text-md'><li>Home</li></Link>
          <Link to='/about' className='hover:font-bold hover:text-red-500 hover:text-md '><li>About</li></Link>
          <Link to='/admission' className='hover:font-bold hover:text-red-500 hover:text-md '><li>Admission</li></Link>
          <Link to='/academic' className='hover:font-bold hover:text-red-500 hover:text-md' ><li>Academic</li></Link>
          <Link to='/mandatory' className='hover:font-bold hover:text-red-500 hover:text-md '><li>Mandatory Public Disclosure</li></Link>
          <Link to='/achievement' className='hover:font-bold hover:text-red-500 hover:text-md  '><li>Achievement</li></Link>
          <Link to='/infrastructure' className='hover:font-bold hover:text-red-500 hover:text-md  '><li>Infrastructure</li></Link>
          <Link to='/contact-us' className='hover:font-bold hover:text-red-500 hover:text-md  '><li>Contact Us</li></Link>
          <Link to='/gallery' className='hover:font-bold hover:text-red-500 hover:text-md  '><li>Gallery</li></Link>
        </ul>
      </div>

      {/* Follow on Us */}
      <div>
        <h2 className='text-2xl text-red-700 font-semibold underline underline-offset-8 decoration-gray-300'>Follow Us on</h2>
       <div className='flex mt-5 w-40 gap-2'>
       <a href=""><img src="./images/icons/facebook.png" alt="facebook" className='hover:scale-140 hover:animate-bounce'/></a>
        <a href=""><img src="./images/icons/instagram.png" alt="facebook" className='hover:scale-140 hover:animate-bounce' /></a>
        <a href=""><img src="./images/icons/youtube.png" alt="facebook" className='hover:scale-140 hover:animate-bounce' /></a>
       </div>
       
      </div>
    </div>

    {/* bottom bar */}
    <div className='bg-red-800 text-white mt-4 flex justify-center py-0.5 items-center'>
      <p className='text-sm'>All Rights Reserved With Bhondawe Patil Public School</p>
    </div>
    
    </>
  )
}

export default Footer