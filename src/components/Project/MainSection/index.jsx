import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = ({ isOpen }) => {
  return (
    <div className={isOpen ? "main-section-close" : "main-section-open"}>
      <Head />
      <Body />
    </div>
  );
};
