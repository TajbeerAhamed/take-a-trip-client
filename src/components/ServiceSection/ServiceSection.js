import React from 'react';


const ServiceSection = ({serviceSection}) => {
   const {img,name,price,details} = serviceSection
    // console.log(serviceSection);
    
    return (
        <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
	
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
			
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-3xl font-semibold text-violet-400">{name}</h3>
			</a>
            <div className="flex items-center text-xs">
				<span className="text-xl font-semibold text-violet-400">Price: {price}</span>
			</div>
			<p className="leading-snug text-gray-400">{details}</p>
		</div>
       
	</div>
</div>
    );
};

export default ServiceSection;