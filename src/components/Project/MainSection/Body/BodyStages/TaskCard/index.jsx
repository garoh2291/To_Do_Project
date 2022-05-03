import "./styles.css";
export const TaskCard = ({
  header,
  description,
  isHighPriority,
  assigneeSurname,
  assigneeName,
  created,
}) => {
  const openedTime = Math.trunc((Date.now() - created) / (1000 * 60 * 60 * 24));
  return (
    <div className="task-card">
      <h6 className="card-header">{header}</h6>
      <p className="card-description">{description}</p>
      <p className={isHighPriority ? "priority-high" : "priority-low"}>
        {isHighPriority ? "High" : "Low"}
      </p>

      <div
        className="card-assignee"
        title={`${assigneeName} ${assigneeSurname}`}
      >
        <p className="card-assignee-text">
          {`${assigneeName[0]} ${assigneeSurname[0]}`}
        </p>
      </div>
      <i
        class={`${
          openedTime < 3 ? "short-time" : "long-time"
        } time-opened-icon bx bx-dots-horizontal-rounded`}
        title={`${openedTime} Days`}
      ></i>
    </div>
  );
};
