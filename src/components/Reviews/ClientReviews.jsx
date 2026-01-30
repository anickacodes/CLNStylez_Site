import { Card, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import reviewsData from "./reviews.json"; 
import './ClientReviews.css'

const ClientReviews = () => {
  const hairBraidingServices = reviewsData.hair_braiding_services;
  const [reviewIndices, setReviewIndices] = useState({});

  useEffect(() => {
    const initialIndices = {};
    // glitch fix in index skip in cards
    Object.keys(hairBraidingServices).forEach((service) => {
      initialIndices[service] = 0;
    });
    setReviewIndices(initialIndices);
  }, [hairBraidingServices]);

  const updateReviewIndex = (service) => {
    setReviewIndices((prevState) => ({
      ...prevState,
      [service]: (prevState[service] + 1) % hairBraidingServices[service].length, // Ensure it loops back to 0 when exceeding the array length
    }));
  };

  return (
    <Carousel className="carousel-container">
      {Object.keys(hairBraidingServices).map((service, index) => (
        <Carousel.Item key={index} className="item">
          {hairBraidingServices[service][reviewIndices[service]] && (
            <Card className="carousel-card">
              <Card.Body className="carousel-cardbody">
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
