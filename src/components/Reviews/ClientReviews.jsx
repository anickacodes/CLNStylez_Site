import { Card, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import reviewsData from "./reviews.json"; 

const ClientReviews = () => {
  const hairBraidingServices = reviewsData.hair_braiding_services;
  const [reviewIndices, setReviewIndices] = useState({});

  const updateReviewIndex = (service) => {
    setReviewIndices((prevState) => ({
      ...prevState,
      [service]: (prevState[service] || 0) + 1,
    }));
  };

  useEffect(() => {
    Object.keys(hairBraidingServices).forEach((service) => {
      updateReviewIndex(service);
    });
  }, [hairBraidingServices]);

  return (
    <Carousel>
      {Object.keys(hairBraidingServices).map((service, index) => (
        <Carousel.Item key={index}>
          {/* one review for the current service */}
          {hairBraidingServices[service][reviewIndices[service]] && (
            <Card>
              <Card.Body>
                <Card.Title>{hairBraidingServices[service][reviewIndices[service]].client_name}</Card.Title>
                <Card.Text>{hairBraidingServices[service][reviewIndices[service]].review_text}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ClientReviews;
