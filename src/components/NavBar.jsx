import { Link } from "react-router-dom";
import { Button, Collapse } from 'react-bootstrap';
import '../App.css'

export default function NavBar() {
  return (
    <>
      <nav>
      <Button className="btn btn-light" id='button' as={Link} to="/">Home</Button> 
      <Button className="btn btn-light" id='button' as={Link} to="/services">Services</Button> 
   
      </nav>
    </>
  );
}
