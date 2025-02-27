import React from 'react'
import CommonTopBanner from '../Component/CommonTopBanner'

const Admission = () => {
  return (
    <>
      <CommonTopBanner title='Admission' />
      {/* Vidoe */}
      <div className="bg-white flex justify-center flex-col items-center p-12">
        <h1 className="text-3xl font-bold w-full flex justify-center text-blue-900 ">School Virtual Tour</h1>
        <div className="m-10 mt-5 mb-3">
          <iframe className='sm:w-230 sm:h-130' src="https://www.youtube.com/embed/cuIFuOVG9eA?si=PXRLfhnYuJTopxHe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* Admision Enquery form */}
      <div className='bg-gray-100 py-10'>
        <div className='grid grid-cols-1 w-full sm:w-1/2 mx-auto'>
          <div className=' bg-blue-900 rounded-md shadow-md p-6 sm:p-12 m-2 sm:m-5'>
            <div className='font-play text-2xl md:w-xl text-gray-200 '>
              <span className='text-xl sm:text-3xl text-gray-200 font-semibold mb-4 '>
                Please fill the Form below to Place Admission Enquiry
              </span>
              <form action="">
                <div className='grid grid-cols-1 gap-x-8 gap-y-8 my-3 relative'>
                  <input type="text" placeholder='Name of Student' className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2' />
                  <input type="text" placeholder='Admission Required For Which Grade?' className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2' />
                  <input type="text" placeholder='Parent Name' className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2' />
                  <input type="number" placeholder='Contact Number' className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2' />
                  <input type="email" placeholder='Email ID' className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2' />
                  <input type="text" placeholder='Residential Address' className='border-b-2 border-gray-200 text-stone-300 outline-none px-4 py-2 sm:text-xl text-base bg-blue-900 col-span-2' />
                </div>
                <button className='inline-block w-auto font-play mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Admission