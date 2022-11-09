import React from 'react';


const ServiceSection = ({serviceSection}) => {
   const {img,name,price,details} = serviceSection
    // console.log(serviceSection);
    
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
	<img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{name}</span>
		<h2 className="text-xl font-semibold tracking-wide">{price}</h2>
	</div>
	<p className="text-gray-100">{details}</p>
</div>
        </div>
    );
};

export default ServiceSection;