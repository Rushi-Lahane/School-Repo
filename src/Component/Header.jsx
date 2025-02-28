import React, { useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* top bar */}
            <div className='bg-red-700 py-1'>
                <div className='mx-auto w-11/12 flex justify-between text-white text-sm'>
                    <p>rushilahane@gmail.com</p>
                    <p>Facebook</p>
                </div>
            </div>

            {/* logo */}
            <div className='w-11/12 container flex items-center mb-1'>
                <img src="./images/logo-name.jpg" className='w-[500px] sm:w-auto h-[60px] sm:h-auto' alt="logo" />
                <div className='sm:hidden block mt-3'>
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X color='black' /> : <Menu color='black' />}
                    </button>
                </div>
            </div>

            {/* Nav bar */}
            <nav className=' bg-blue-900 flex sm:py-2' >
                <ul className={`sm:flex sm:flex-row sm:gap-x-5 mx-auto w-11/12 text-white ${open ? "block " : "hidden"}`}>
                    <Link to='/' className='px-1 text-md text-white text-[15px] font-semibold  '> <li onClick={()=>setOpen(!open)}>Home</li> </Link>
                    <Link to='/about' className='px-1 text-md text-white text-[15px] font-semibold '> <li onClick={()=>setOpen(!open)} >About Us</li> </Link>
                    <Link to='/admission' className='px-1 text-md text-white text-[15px] font-semibold '> <li onClick={()=>setOpen(!open)} >Admission</li></Link>
                    <Link to='/mandatory' className='px-1 text-md text-white text-[15px] font-semibold '> <li onClick={()=>setOpen(!open)} >Mandatory Public Disclosure</li></Link>
                    <Link to='/academic' className='px-1 text-md text-white text-[15px] font-semibold ' > <li onClick={()=>setOpen(!open)}>Academic</li></Link>
                    <Link to='/achievement' className='px-1 text-md text-white text-[15px] font-semibold '> <li onClick={()=>setOpen(!open)}>Achievement</li></Link>
                    <Link to='/infrastructure' className='px-1 text-md text-white text-[15px] font-semibold '> <li onClick={()=>setOpen(!open)}>Infrastructure</li></Link>
                    <Link to='/gallery' className='px-1 text-md text-white text-[15px] font-semibold '> <li  onClick={()=>setOpen(!open)}> Gallery</li></Link>
                    <Link to='/contact-us' className='px-1 text-md text-white text-[15px] font-semibold '> <li  onClick={()=>setOpen(!open)}> Contact Us</li></Link>
                </ul>

            </nav>
        </div>
    )
}

export default Header