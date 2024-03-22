import Title from "../title/Title";
import EmployeesList from "../employees-list-link/EmployeesListLink";
import "./nav.css";

export default function Nav({ children }) {
  return (
    <header className="nav">
      <Title />
      <EmployeesList />
    </header>
  );
}
