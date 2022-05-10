import { useState } from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "./NavItem";
import "./styles.css";

const { project, contact, aboutMe } = NAVBAR_PAGES;
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(project.link);

  const navItemClickHandler = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="navbar1">
      <ul className="navbar-list1">
        <NavItem
          label={aboutMe.label}
          link={aboutMe.link}
          isActive={activeLink === aboutMe.link}
          onClick={navItemClickHandler}
        />
        <NavItem
          label={project.label}
          link={project.link}
          isActive={activeLink === project.link}
          onClick={navItemClickHandler}
        />
        <NavItem
          label={contact.label}
          link={contact.link}
          isActive={activeLink === contact.link}
          onClick={navItemClickHandler}
        />
      </ul>
    </nav>
  );
};
