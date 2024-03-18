import Title from "../title/Title";
import EmployeesList from "../employees-list-link/EmployeesListLink";
import "./header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      <Title />
      <EmployeesList />
    </header>
  );
}
