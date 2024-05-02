import React, { useState } from "react";
import serviceData from "./ServiceInfo.json";
import { Link } from "react-router-dom";
import { Collapse, Card, Button } from "react-bootstrap";
import "./ServiceList.css"; 

function ServiceList() {
  const { service_categories } = serviceData;
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCollapse = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="service-list-container text-center" >
      {Object.entries(service_categories).map(([category, services], index) => (
        <Card key={index} className="card-container m-1">
          <Card.Header className="category-header">
            <Button
              onClick={() => toggleCollapse(category)}
              aria-controls={`collapse-${category}`}
              aria-expanded={openCategory === category}
              variant="link"
              className="category-toggle"
            >
              {category.toUpperCase()}
            </Button>
          </Card.Header>
          <Collapse in={openCategory === category}>
            <Card.Body id={`collapse-${category}`}>
              <ul className="service-list">
                {services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="service-item">
                    <Link to={`/services/${category}/${service.name}`} className="service-name" aria-label={service.name}>
                      {service.name}
                    </Link>
                    <br />
                    <span className="service-description" aria-label={`Description: ${service.description}`}>
                      Description: {service.description}
                    </span>
                    <br />
                    <span className="service-price" aria-label={`Price: $${service.price}`}>
                      Price: ${service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

export default ServiceList;
