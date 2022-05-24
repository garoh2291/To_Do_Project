import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "../../components/HomePage";
import { UnderConstruct } from "../../components/UnderConstruct";
import { NAVBAR_PAGES } from "../../data";
import { ProjectPage } from "../../pages/Project";
import { NavItem } from "./NavItem";
import "./styles.css";

const { project, contact, aboutMe } = NAVBAR_PAGES;
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const navItemClickHandler = (link) => {
    setActiveLink(link);
  };
  return (
    <>
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
      <Routes>
        <Route path={`/${project.link}`} element={<ProjectPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<UnderConstruct />} />
      </Routes>
    </>
  );
};

export const Navbar1 = () => {
  return (
    <>
      <nav className="navbar1">
        <ul className="navbar-list1">
          <li className="nav-item1">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </>
  );
};
