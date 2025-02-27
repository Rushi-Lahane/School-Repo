import React from 'react'

const CommonTopBanner = ({title}) => {
    return (
<div className='bg-[url("/images/subheaderbg.jpg")] bg-no-repeat bg-cover'>
            <h3 className='text-center text-blue-900 font-bold  text-4xl py-10'>{title}</h3>
        </div>
    ) 
}

export default CommonTopBanner
