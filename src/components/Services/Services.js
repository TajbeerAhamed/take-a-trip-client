import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="grid sm:grid-cols-4 gap-3 ml-10 mt-10">
      {services.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
        <button className="btn btn-outline btn-success">Success</button>
    </div>
  );
};

export default Services;
