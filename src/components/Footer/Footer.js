import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="py-6 bg-gray-800 text-gray-50">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
   
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
				
          <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
						<img src="download.jpg" alt="" />
					</div>
					<span className="self-center text-2xl font-semibold text-violet-400">TAKE A TRIP</span>
				</a>
			</div>
		
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
					<li>
						<Link to='/' rel="noopener noreferrer" href="#" className="hover:text-violet-400">Home</Link>
					</li>
					<li>
						<Link to='/services' rel="noopener noreferrer" href="#" className="hover:text-violet-400">Services</Link>
					</li>
					<li>
						<Link to='/blog' rel="noopener noreferrer" href="#" className="hover:text-violet-400">Blog</Link>
					</li>
				
					
				</ul>
			</div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>© <span className="text-violet-400 text-lg">Take-A-Trip</span>, 2022 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-400 text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				
				
        <Link to='/login' rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
				</Link>
			</div>
		</div>
	</div>
</footer>
  );
};

export default Footer;
