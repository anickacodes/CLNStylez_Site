import { Link } from "react-router-dom";
import { Button, Collapse } from 'react-bootstrap';
import '../App.css'

export default function NavBar() {
  return (
    <>
      <nav className="bg-dark text-light py-4" style={{
            position: "fixed",
            top: 0,
            left:0,
            right: 0,
            width: "maxContent"
          }}>
      <Button className="btn btn-dark btn-outline-warning" id='button' as={Link} to="/" aria-label="Home">Home</Button> 
      <Button className="btn btn-dark btn-outline-warning" id='button' as={Link} to="/ambassador-links" aria-label="Home"> Affiliates</Button> 
      <Button className="btn btn-dark btn-outline-warning" id='button' as={Link} to="/service-categories" aria-label="Service Listings">Service Listings </Button> 
   
      </nav>
    </>
  );
}
