import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Service = ({service}) => {
	useTitle('Services')
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
			<PhotoProvider  speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }>
					<figure>
						<PhotoView src={service.img} style={{ objectFit: "cover" }}>
						<img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> 
						</PhotoView >
						
					</figure>

					
				</PhotoProvider>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{service.name}</h2>
			<p className="text-gray-100">{service.details.slice(0,100)}...</p>
			<p className="text-gray-100">Price: {service.price}</p>
		</div>
		<Link to={`/services/${service._id}`}> 
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">View Details</button>
		</Link>
	</div>
</div>
        </div>
    );
};

export default Service;