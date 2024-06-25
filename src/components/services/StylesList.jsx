import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Collapse, Card, Button } from "react-bootstrap";
import "./StylesList.css";

function StylesList() {
  const { categoryId } = useParams();
  const [styles, setStyles] = useState([]);
  const [openStyle, setOpenStyle] = useState(null);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2222/styles/category/${categoryId}`
        );
        console.log(response.data);
        setStyles(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStyles();
  }, [categoryId]);

  const handleToggle = (styleId) => {
    setOpenStyle(openStyle === styleId ? null : styleId);
  };

  return (
    <div className="styles-container mt-5">
      {styles.map((style) => (
        <Card key={style.id} className="style-item">
          <Card.Header>
            <Button
              className="w-75"
              variant="info"
              onClick={() => handleToggle(style.id)}
              aria-controls={`collapse-${style.id}`}
              aria-expanded={openStyle === style.id}
            >
              {style.name}
            </Button>
          </Card.Header>
          <Collapse in={openStyle === style.id}>
            <div id={`collapse-${style.id}`}>
              <Card.Body>
                <p>{style.description}</p>
                <p>
                  Price: <span>${style.price}</span>
                </p>
                <img src={style.image_url} alt={style.name} />
                <p>Duration: {style.duration}</p>
              </Card.Body>
            </div>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

export default StylesList;
