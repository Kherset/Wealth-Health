import Title from "../Title";
import EmployeesList from "../EmployeesList";

export default function Header({ children }) {
  return (
    <header className="header">
      <Title />
      <EmployeesList />
    </header>
  );
}
