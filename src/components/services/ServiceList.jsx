import React from "react";
import hairBraidingServicesData from "./ServiceInfo.json";
import { Link } from "react-router-dom";

function ServiceList() {
  // Access the JSON data
  const { hair_braiding_services } = hairBraidingServicesData;

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <div>
            <h1>Available Hair Braiding Services</h1>
            <ul>
              {hair_braiding_services.map((service, index) => (
                <li key={index}>
                  <Link to={service.name} > {service.name}</Link>
                  <br />
                  Description: {service.description}
                  <br />
                  Price: ${service.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
