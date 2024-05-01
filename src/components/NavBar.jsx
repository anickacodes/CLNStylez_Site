import { Link } from "react-router-dom";
import { Button, Collapse } from 'react-bootstrap';
import '../App.css'

export default function NavBar() {
  return (
    <>
      <nav>
      <Button className="btn btn-light" id='button' as={Link} to="/" disabled>Home</Button> 
      <Button className="btn btn-light" id='button' as={Link} to="/service-categories">Service Listings </Button> 
   
      </nav>
    </>
  );
}
