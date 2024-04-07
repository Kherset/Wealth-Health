import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function EmployeesListLink({ children }) {
  return (
    <div className="header-link">
      <FontAwesomeIcon icon={faUsers} className="header-link-icon" />
      <Link
        to="/Wealth-Health/employees-list"
        className="header-link-to-employees-list"
      >
        Current Employees
      </Link>
    </div>
  );
}
