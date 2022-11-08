import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Description from '../Description/Description';
import HeaderDetails from '../HeaderDetails/HeaderDetails';
import HomeDetails from '../HomeDetails/HomeDetails';
import Services from '../Services/Services';

const Home = () => {
    const navigate = useNavigate();
    const handleDetails = () => {
      navigate("/services");
    };
    const dataServices = useLoaderData()
    return (
        <div>
          
    <div className='grid sm:grid-cols-3 gap-3 ml-10 mt-10'>
    {
        dataServices.slice(3).map(dataService => <HomeDetails
        key={dataService._id}
        dataService={dataService}
        ></HomeDetails>)
      }
         
    </div>
    <HeaderDetails></HeaderDetails>
         <Banner></Banner>
         <Description></Description>
         <Link to={'/services'}>
         <button onClick={handleDetails} className="btn btn-success mx-auto">See All</button>
         </Link>
        </div>
        
    );
    
};

export default Home;