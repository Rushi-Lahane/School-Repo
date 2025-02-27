import React, { useState } from 'react'
import CommonTopBanner from '../Component/CommonTopBanner'
import EarlyYear from '../Component/acadmicSubCom/EarlyYear'
import FoundationYear from '../Component/acadmicSubCom/FoundationYear'
import GrowingYear from '../Component/acadmicSubCom/GrowingYear'

const Academic = () => {
  const [button, setButton] = useState("EARLY YEARS PROGRAMME");
  const [content, setContent] = useState(<EarlyYear />);

  const Content = {
    "EARLY YEARS PROGRAMME": <EarlyYear />,
    "THE FOUNDATION YEARS PROGRAMME": <FoundationYear />,
    "GROWING YEARS PROGRAMME": <GrowingYear />
  }

  return (
    <>
      <CommonTopBanner title={'Academic'}/>
      <div className=' bg-gray-100'>
        <div className='container mx-auto sm:p-10 p-5 grid  gap-7'>
          {/* buttons */}
          <div className='grid grid-cols-1 sm:gap-10 gap-7  sm:grid-cols-3'>
            {
              Object.keys(Content).map((key) => (
                <button key={key} className={`p-5 font-bold border border-blue-900 ${button===key ?'bg-blue-900 text-white':'text-blue-900'}`} onClick={() => {setContent(Content[key]); setButton(key);  }}>{key}</button>
              ))
            }
            {/* {
              Object.keys(ContentSelect).map((key) => (
                <button key={key} className={`p-2 border cursor-pointer border-gray-200 rounded-md font-bold ${button === key ? 'bg-blue-900 text-white' : 'text-blue-900'}`} onClick={() => { setContent(ContentSelect[key]); setButton(key); }}>{key}</button>
              ))
            } */}
          </div>
          {/* paragraph */}
          <div className='w-11/12 mx-auto sm:p-10'>
            {content}
          </div>
        </div>
      </div>

    </>

  )
}

export default Academic