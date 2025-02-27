import React from 'react'

const Principal = () => {
  return (
    <div>
      <div className='p-4 flex flex-col justify-center items-center gap-y-2'>
        <img src="./images/about/Principal-01.png" alt="" />
        <h4 className='text-lg text-blue-900 font-semibold'>Mr. Manoj Asha Ashok Savale</h4>
        <p className='text-gray-600'>Principal, Bhondawe Patil Public School</p>
      </div>

      <div className='flex flex-col items-center justify-center gap-y-5'>
        <h2 className='text-blue-900 font-bold text-3xl'>Message from the Principal</h2>

        <p className='text-gray-500 text-lg'> <font className='font-semibold text-black text-lg'>Welcome to Bhondawe Patil Public School, Bajaj Nagar!</font> <br />
        It gives me immense pleasure to share with you that our school has been recognized for its commitment to excellence in education. At Bhondawe Patil Public School, we are dedicated to implementing the National Education Policy (NEP) 2020 principles. We have restructured our curriculum and infrastructure to align with NEP guidelines, ensuring a robust educational framework that fosters holistic development.
          <br /> <br />
          Our campus is a testament to our commitment to a positive and nurturing environment. Our school is surrounded by lush greenery, with thousands of trees and saplings, and offers a serene and refreshing atmosphere. This unique feature not only enhances the aesthetic appeal but also contributes to the well-being of everyone on campus.
          <br /><br />
          We take pride in providing an international level of education with a local touch. Our students excel in various disciplines, and we have integrated cutting-edge technology into our curriculum. From a state-of-the-art robotics lab to artificial intelligence facilities, we ensure that our students are well-equipped for the future.
          <br /><br />
          We promise our parents and community that every student at BPPS will experience comprehensive growth. Our vision and mission are clear: to develop the leaders of tomorrow through a blend of academic excellence and technological advancement.
          <br /><br />
          As we continue to strive for greater heights, we seek your cooperation and partnership. We can achieve our goals and make BPPS a beacon of educational excellence.</p>
      </div>
    </div>
  )
}

export default Principal