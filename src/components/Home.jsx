import { Link } from "react-router-dom";
import "../App.css";
import ClientReviews from "./Reviews/ClientReviews";

export default function Home() {
  return (
    <div className="home-container">
      <img className="logo" src={"src/assets/cnl.jpeg"} alt="logo" />
      <h4>
        <Link
          className="subtitle"
          to="/bio"
          aria-label="Learn more about our team of professionals"
        >
          Meet our healing hands
        </Link>
      </h4>
      <div>
        <ClientReviews />
      </div>
    </div>
  );
}
