import { Link } from "react-router-dom";
import './ServiceCategories.css'

const ServiceCategories = () => {
  return (
    <>
     <h2>
        <i>Currently offered services</i> 
        </h2>
    <div className="categories-container">
       
<section>
        <ul className="category-list list-group m-1" role="list">
          <li className="category-item list-group-item">
            <Link to="/services/kids" role="listitem">Kids</Link>
          </li>
          <li className="category-item list-group-item">
            <Link to="/services/color" role="listitem">Color</Link>
          </li>
          <li className="category-item list-group-item">
            <Link to="/services/crochet" role="listitem">Crochet</Link>
          </li>
          <li className="category-item list-group-item">
            <Link to="/services/natural-styling" role="listitem">Natural Styling</Link>
          </li>
          <li className="category-item list-group-item">
            <Link to="/services/hair-care-regimen" role="listitem">Hair Maintenance</Link>
          </li>
          <li className="category-item list-group-item">
            <Link to="/services/braid-and-twist-extensions" role="listitem">Braid & Twist Extensions</Link>
          </li>
       </ul>
        </section>
    </div>
    </>
  );
};

export default ServiceCategories;

