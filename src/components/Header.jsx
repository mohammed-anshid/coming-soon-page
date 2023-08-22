/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../assets/name-log.svg'

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 19) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  };
  window.addEventListener("scroll", changeBackground);  
  return (
    
    <nav className={`fixed w-full z-20 top-0 left-0 lg:pt-5  ${navbar ? `bg-[#002b23]`:`bg-transparent`}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[1.5rem]">
                <a href="" className="flex items-center">
                    <img src={logo} className="h-6 md:h-8 mr-3" alt="Flowbite Logo"/>
                </a>
        </div>
    </nav>
    
// {/* <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
//   </div>
// </nav> */}

    
  )
}

export default Header