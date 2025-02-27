
  import React, { useState } from 'react';
  import Mission_Vision from '../Component/aboutSubCom/Mission_Vision';
  import Philosophy from '../Component/aboutSubCom/Philosophy';
  import Chairman from '../Component/aboutSubCom/Chairman';
  import Principal from '../Component/aboutSubCom/Principal';
  import Aim from '../Component/aboutSubCom/Aim';
  import Distinctions from '../Component/aboutSubCom/Distinctions'
  import CommonTopBanner from '../Component/CommonTopBanner';

  const About = () => {

    const [content, setContent] = useState(<Mission_Vision />);
    const [button, setButton] = useState("Mission & Vision");

    const ContentSelect = {
      "Mission & Vision": <Mission_Vision />,
      "Philosophy": <Philosophy />,
      "Chairman's Desk ": <Chairman />,
      "Principal's Desk": <Principal />,
      "Aim": <Aim />,
      "Distinctions": <Distinctions />
    }

    return (
      <>
        <div className='bg-gray-100 py-10'>
        <div className="bg-[url('/images/about/about-bg.jpg')] bg-cover bg-no-repeat py-20">
    
          </div>
          <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-12 gap-y-5 sm:gap-x-4'>
            {/* side bar button */}
            <div className='bg-white col-span-3 h-80 p-5 justify-around rounded-md shadow-md gap-y-2 grid grid-cols-1'>
              {
                Object.keys(ContentSelect).map((key) => (
                  <button key={key} className={`p-2 border cursor-pointer border-gray-200 rounded-md font-bold ${button === key ? 'bg-blue-900 text-white' : 'text-blue-900'}`} onClick={() => { setContent(ContentSelect[key]); setButton(key); }}>{key}</button>
                ))
              }
            </div>


            {/* side Content */}
            <div className='bg-white col-span-9 rounded-md shadow-md p-5'>
              {content}
            </div>
          </div>


        </div >

      </>

    );
  };

  export default About;
