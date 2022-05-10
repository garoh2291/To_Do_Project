import "./styles.css";
export const TaskCard = ({ obj }) => {
  const {
    header,
    description,
    isHighPriority,
    assigneeName,
    assigneeSurname,
    created,
    issueType,
  } = obj;
  const openedTime = Math.trunc((Date.now() - created) / (1000 * 60 * 60 * 24));
  return (
    <div className="task-card">
      <h6 className="card-header1">{header}</h6>
      <p className="card-description" title={description}>
        {description}
      </p>
      <p className={isHighPriority ? "priority-high" : "priority-low"}>
        {isHighPriority ? "High" : "Low"}
      </p>

      <div
        className="card-assignee1"
        title={`${assigneeName} ${assigneeSurname}`}
      >
        <p className="card-assignee-text1">
          {`${assigneeName[0]} ${assigneeSurname[0]}`}
        </p>
      </div>
      <i
        class={`${
          openedTime < 7 ? "short-time" : "long-time"
        } time-opened-icon bx bx-dots-horizontal-rounded`}
        title={`${openedTime} Days`}
      ></i>
      {issueType === "task" ? (
        <i
          title={issueType}
          class="issuetype-icon task-icon bx bx-check-square"
        ></i>
      ) : (
        <i
          title={issueType}
          class="issuetype-icon bug-icon bx bxs-square-rounded"
        ></i>
      )}
    </div>
  );
};
