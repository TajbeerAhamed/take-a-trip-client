import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useNavigate } from 'react-router-dom';

const HomeDetails = ({dataService}) => {
	
    const {_id,img,name,price,details} = dataService
    return (
        <div >
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-900">
			<PhotoProvider  speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }>
					<figure>
						<PhotoView src={img} style={{ objectFit: "cover" }}>
						<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> 
						</PhotoView >
						
					</figure>

					
				</PhotoProvider>

	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-gray-100 font-semibold tracking-wide">{name}</h2>
			<p className="text-gray-100">Price: {price}</p>
			<p className="text-gray-100">{details.slice(0,100)}....</p>
		</div>
		
		<Link to={`/services/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">View Details</button></Link>
	</div>
	
</div>
        </div>
    );
};

export default HomeDetails;