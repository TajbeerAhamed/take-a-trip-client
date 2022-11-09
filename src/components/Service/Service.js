import React from 'react';

const Service = ({service}) => {
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{service.name}</h2>
			<p className="text-gray-100">{service.details}...</p>
			<p className="text-gray-100">Price: {service.price}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">View Details</button>
	</div>
</div>
        </div>
    );
};

export default Service;