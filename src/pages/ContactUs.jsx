import React from 'react'
import CommonTopBanner from '../Component/CommonTopBanner'

const ContactUs = () => {
  return (
    <>
      <CommonTopBanner title={"ContactUs"} />

      <div className='bg-gray-100 grid-cols-1 items-center justify-center space-y-5 py-10'>
        {/* School address */}
        <div className='container bg-white showdow-3xl text-center mx-auto p-10 rounded-md shadow-md '>
          <h3 className='text-3xl text-blue-900 font-bold'>School Address</h3>
          <p className='text-center text-gray-600 sm:leading-10 md:leading-10  sm:p-5 text-md sm:text-lg'>
            Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad – 431136. (MH). <br />
            Contact: 6232616161/ 6232717171 <br />
            Email: info@bhondawepatilschool.in
          </p>
        </div>
        {/* map and form */}
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-15 sm:gap-20  mt-10 rounded-md'>

          {/*  School map */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.409556934497!2d75.22449805611491!3d19.84619772174578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1739904631396!5m2!1sen!2sin" className='sm:w-160 h-80 w-full rounded shadow-md' allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Contact us form */}
          <div className='bg-blue-900 rounded-md shadow-md p-12'>
            <span className='text-3xl text-white font-semibold'>Send Us a Message</span>
            <form className='flex flex-col gap-5'>
              <input type="text" placeholder='Name' className='text-white border-b-2 p-2 text-xl' />
              <input type="number" placeholder='Mobail' className='text-white border-b-2 p-2 text-xl' />
              <input type="email" placeholder='Email' className='text-white border-b-2 p-2 text-xl' />
              <input type="text" placeholder='Subject' className='text-white border-b-2 p-2 text-xl' />
              <input type="text" placeholder='Message' className='text-white border-b-2 p-2 text-xl' />

              <button type='submit' className='text-white bg-red-500 p-1 w-20 rounded-md text-lg'>Send</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs