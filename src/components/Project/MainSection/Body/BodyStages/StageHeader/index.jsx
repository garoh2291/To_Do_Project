import "./styles.css";
export const StageHeader = ({ stage }) => {
  return (
    <div className="head-stage-column">
      <h6 className="stage-column-heading">{stage}</h6>
      <div className="head-stage-column-actions">
        {(() => {
          if (stage === "Backlog") {
            return <i class="icon-actions bx bx-plus"></i>;
          } else {
            return "";
          }
        })()}
        <i class="icon-actions bx bx-dots-horizontal-rounded"></i>
      </div>
    </div>
  );
};
