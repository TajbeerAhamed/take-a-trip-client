import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';

const ServiceDetails = () => {
   const details = useLoaderData()
   console.log(details);
    return (
        <div>
            {
                details.map(serviceSection => <ServiceSection
                
                key={serviceSection._id}
                serviceSection={serviceSection}
                ></ServiceSection>)
            }
            {/* <ServiceSection></ServiceSection>
            <ReviewSection></ReviewSection> */}
        </div>
    );
};

export default ServiceDetails;