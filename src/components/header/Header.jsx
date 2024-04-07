import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/Wealth-Health" className="link-to-homepage">
        HRnet
      </Link>
      <h1 className="datas-table-title">Current Employees</h1>
    </header>
  );
}
