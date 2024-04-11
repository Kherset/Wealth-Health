import "./error-page.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <div className="error-page-message">
        <h1 className="error-page-title">Oops!</h1>
        <p className="error-page-text">
          Sorry, an unexpected error has occurred.
        </p>

        <Link to="/Wealth-Health" className="error-page-link">
          Comeback to Homepage
        </Link>
      </div>
    </div>
  );
}
