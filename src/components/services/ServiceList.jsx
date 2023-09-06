import React from 'react'; // Import React if it's a React component
import hairBraidingServicesData from './ServiceInfo.json'; // Import the JSON data

function ServiceList() {
  // Access the JSON data
  const { hair_braiding_services } = hairBraidingServicesData;

  return (
    <div>
      <h1>Available Hair Braiding Services</h1>
      <ul>
        {hair_braiding_services.map((service, index) => (
          <li key={index}>
            <strong>{service.name}</strong><br />
            Description: {service.description}<br />
            Price: ${service.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;