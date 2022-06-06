import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "./NavItem";
import { AuthItem } from "./AuthItem";
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
          <AuthItem />
        </ul>
      </nav>
    </>
  );
};
