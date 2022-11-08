import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Description from '../Description/Description';
import HeaderDetails from '../HeaderDetails/HeaderDetails';
import HomeDetails from '../HomeDetails/HomeDetails';
import Services from '../Services/Services';

const Home = () => {
    const dataServices = useLoaderData()
    return (
        <div>
         <Banner></Banner>
         <HeaderDetails></HeaderDetails>
         <Description></Description>
    <div className='grid sm:grid-cols-3 gap-3 ml-10 mt-10'>
    {
        dataServices.slice(3).map(dataService => <HomeDetails
        key={dataService._id}
        dataService={dataService}
        ></HomeDetails>)
      }
    </div>
        </div>
    );
};

export default Home;