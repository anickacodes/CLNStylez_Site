import React from "react";
import hairBraidingServicesData from "./ServiceInfo.json";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./ServiceList.css"; 

function ServiceList() {
  const { hair_braiding_services } = hairBraidingServicesData;

  return (
    <Container className="service-list-container text-center">
      <div className="row">
        <div className="col-sm">
       
            <ul>
              {hair_braiding_services.map((service, index) => (
                <li key={index} className="service-item">
                  <Link to={service.name} className="service-name" aria-label={service.name}>{service.name}</Link>
                <br />
                <span className="service-description" aria-label={`Description: ${service.description}`}>Description: {service.description}</span>
                <br />
                <span className="service-price" aria-label={`Price: $${service.price}`}>Price: ${service.price}</span>
              </li>
              ))}
            </ul>
          </div>
     
      </div>
    </Container>
  );
}

export default ServiceList;
