import { Link } from "react-router-dom";
import axios from "axios";
import "./ServiceCategories.css";
import { useEffect, useState } from "react";

const ServiceCategories = () => {
  const [categories, setCategories] = useState([]);
  const url = import.meta.env.VITE_URL;
  // service, description

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:2222/category`);
        // console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div key={category.id} className="categories-list">
          <Link to={`/styles/${category.id}`}>
            <h5>{category.service}</h5>
          </Link>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCategories;

// ctegories to the left => epand on the right
