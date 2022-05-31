import { HeadRightMenu } from "./HeadRightMenu";
import "./styles.css";
export const Head = ({
  onClick,
  isOpen,

  getTasks,
}) => {
  return (
    <div
      className={isOpen ? "main-section-head-open" : "main-section-head-close"}
    >
      <HeadRightMenu isOpen={isOpen} getTasks={getTasks} />
      {isOpen ? (
        <i className="bx pull-up bx-chevrons-up" onClick={onClick}></i>
      ) : (
        <i className="pull-down bx bx-chevrons-down" onClick={onClick}></i>
      )}
    </div>
  );
};
