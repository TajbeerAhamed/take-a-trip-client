import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDetails = () => {
    return (
        <div>
            <section className=" text-gray-900">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl text-gray-900">Heyyy! Travel Freakers Lets See The Unseen Beauty of  
			<span className="text-blue-400"> Bangladesh.</span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">One Life One Dream One Passion.. <span className="text-blue-400 text-2xl">Travelling</span></p>
		<div className="flex flex-wrap justify-center">
			<Link to={'/login'}><button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Lets Go For a Trip</button></Link>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default HeaderDetails;