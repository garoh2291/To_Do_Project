import "./styles.css";

export const NavItem = ({ label, link, isActive, onClick }) => {
  return (
    <li
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={() => onClick(link)}
    >
      {label}
    </li>
  );
};
