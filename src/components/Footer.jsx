import { Container } from "react-bootstrap"
import '../App.css'

const Footer = () => {

    return (
        <footer className="bg-dark text-light py-3" style={{
            position: "fixed",
            bottom: 0,
            left:0,
            right: 0,
            width: "maxContent"
          }} aria-label="Footer" role="contentinfo">
        <Container>
          <p className="mb-0 text-center footer">© 2024 CLN Stylez. All rights reserved.</p>
        </Container>
      </footer>
    )
}


export default Footer