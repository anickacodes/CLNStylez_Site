import { Link } from "react-router-dom";
import './ServiceCategories.css'

const ServiceCategories = () => {
  return (
    <div className="categories-container">
        <h2>
        <i>Currently offered services</i> 
        </h2>
      <section>
        <ul className="catefory-list list-group">
          <li className="category-item "><Link to="/services/kids">Kids</Link></li>

          <li className="category-item"><Link to="/services/color">Color</Link></li>
          <li className="category-item"><Link to="/services/crochet">Crochet</Link></li>
          <li className="category-item"><Link to="/services/natural-styling">Natural Styling</Link></li>
          <li className="category-item"><Link to="/services/hair-care-regimen">Hair Maintenance</Link></li>
          <li className="category-item"><Link to="/services/braid-and-twist-extensions">Braid & Twist Extensions</Link></li>
        
        </ul>
      </section>
    </div>
  );
};

export default ServiceCategories;
