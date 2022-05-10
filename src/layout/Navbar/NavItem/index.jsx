import "./styles.css";

export const NavItem = ({ label, link, isActive, onClick }) => {
  return (
    <li
      className={`nav-item1 ${isActive ? "active" : ""}`}
      onClick={() => onClick(link)}
    >
      {label}
    </li>
  );
};
