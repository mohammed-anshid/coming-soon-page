/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/name-log.svg'

function Header() {
  return (
    
    <nav className="fixed bg-transparent w-full z-20 top-0 left-0 lg:pt-10">
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