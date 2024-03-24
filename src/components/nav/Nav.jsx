import Title from "../title/Title";
import EmployeesList from "../employees-list-link/EmployeesListLink";
import "./nav.css";

export default function Nav({ children }) {
  return (
    <nav className="nav">
      <Title />
      <EmployeesList />
    </nav>
  );
}
