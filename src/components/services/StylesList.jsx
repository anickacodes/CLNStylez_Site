import { useEffect, useState } from "react";
import serviceData from "./ServiceInfo.json";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Collapse, Card, Button } from "react-bootstrap";
import "./StylesList.css"; 

function StylesList() {
  const { categoryId } = useParams();
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await axios.get(`http://localhost:2222/styles/category/${categoryId}`);
        console.log(response.data);
        setStyles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStyles();
  }, [categoryId]);

  return (
    <div className="styles-container">
      {styles.map((style) => (
        <div key={style.id} className="style-item">
          <h5>{style.name}</h5>
          <p>{style.description}</p>
          <p>Price: ${style.price}</p>
          <img src={style.image_url} alt={style.name} />
          <p>Duration: {style.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default StylesList;



