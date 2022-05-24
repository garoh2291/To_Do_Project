import { Link } from "react-router-dom";
import "./styles.css";

export const NavItem = ({ label, link, isActive, onClick }) => {
  return (
    <li
      className={`nav-item1 ${isActive ? "active" : ""}`}
      onClick={() => onClick(link)}
    >
      <Link to={`/${link}`}>{label}</Link>
    </li>
  );
};
