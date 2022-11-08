import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
            <div className="flex">
            <div className='w-12'> <img className='rounded-full object-cover'  src="download.jpg" alt="" /></div>
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
       <h1 className="btn btn-ghost normal-case text-3xl text-bold text-blue-500">TAKE A TRIP</h1>
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link to={"/"} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</Link>
                    </li>
                  
                    <li className="flex">
                        <Link to={"/services"} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</Link>
                    </li>
                    <li className="flex">
                        <Link to={"/blog"} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="items-center flex-shrink-0 hidden lg:flex">
               <Link to={"/login"} className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900" >Log in</Link>
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
    );
};

export default Header;