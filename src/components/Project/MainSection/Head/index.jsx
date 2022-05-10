import { HeadRightMenu } from "./HeadRightMenu";
import "./styles.css";
export const Head = ({ onClick, isOpen }) => {
  return (
    <div
      className={isOpen ? "main-section-head-open" : "main-section-head-close"}
    >
      <HeadRightMenu isOpen={isOpen} />
      {isOpen ? (
        <i class="bx pull-up bx-chevrons-up" onClick={onClick}></i>
      ) : (
        <i class="pull-down bx bx-chevrons-down" onClick={onClick}></i>
      )}
    </div>
  );
};
