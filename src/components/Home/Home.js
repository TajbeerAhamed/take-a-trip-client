import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../Banner/Banner";
import useTitle from "../../hooks/useTitle";
import Description from "../Description/Description";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import HomeDetails from "../HomeDetails/HomeDetails";
import Services from "../Services/Services";

const Home = () => {
  const navigate = useNavigate();
  useTitle('Home')
  const handleDetails = () => {
    navigate("/services");
  };
  const dataServices = useLoaderData();
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-3 ml-10 mt-10">
        {dataServices.map((dataService) => (
          <HomeDetails
            key={dataService._id}
            dataService={dataService}
          ></HomeDetails>
        ))}
        <div className="mt-10 px-10">
          <Link to={"/services"}>
            <button
              onClick={handleDetails}
              className="btn btn-success mx-auto  px-10 text-black font-semibold bg-violet-400"
            >
              See All
            </button>
          </Link>
        </div>
      </div>
      <HeaderDetails></HeaderDetails>
      <Banner></Banner>
      <Description></Description>
    </div>
  );
};

export default Home;
