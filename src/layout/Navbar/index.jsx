import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "./NavItem";
import "./styles.css";

const { project, contact, aboutMe } = NAVBAR_PAGES;
export const Navbar = () => {
  return (
    <>
      <nav className="navbar1">
        <ul className="navbar-list1">
          <NavItem label={aboutMe.label} link={aboutMe.link} />
          <NavItem label={project.label} link={project.link} />
          <NavItem label={contact.label} link={contact.link} />
        </ul>
      </nav>
    </>
  );
};
