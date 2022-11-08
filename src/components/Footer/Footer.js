import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-50 pt-20">
      <div className="container justify-center  flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
     
			<div className="pb-6 col-span-full justify-center md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
						<img src="download.jpg" alt="" />
					</div>
					<span className="self-center text-2xl font-semibold">TAKE A TRIP</span>
				</a>
			</div>
    
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <div>
              <h1> © 2022 Take A Trip, All rights reserved.</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
