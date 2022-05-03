import "./styles.css";
export const StageHeader = ({ stage }) => {
  return (
    <div className="head-stage-column">
      <h6 className="stage-column-heading">{stage}</h6>
      <div className="head-stage-column-actions">
        <i class="icon-actions bx bx-plus"></i>
        <i class="icon-actions bx bx-dots-horizontal-rounded"></i>
      </div>
    </div>
  );
};
