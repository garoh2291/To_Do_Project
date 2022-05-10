export const TODO_LIST_MOCK_DATA = [
  {
    header: "Create layout",
    description: "create some skin layout and make dinamic actions",
    isHighPriority: true,
    assigneeName: "Garnik",
    assigneeSurname: "Hovsepyan",
    created: new Date("2022-05-06").getTime(),
    issueType: "bug",
    stage: "Backlog",
  },
  {
    header: "Add task cards",
    description: "Create task card component and add in layout",
    isHighPriority: false,
    assigneeName: "Armen",
    assigneeSurname: "Asatryan",
    created: new Date("2022-05-08").getTime(),
    issueType: "task",
    stage: "ToDo",
  },
  {
    header: "Task 3",
    description: "Test taskname for test project",
    isHighPriority: false,
    assigneeName: "Sargis",
    assigneeSurname: "Petrosyan",
    created: new Date("2022-05-01").getTime(),
    issueType: "task",
    stage: "In Progress",
  },
  {
    header: "Task 4",
    description:
      "Test taskname for test project wich need to be in Done section",
    isHighPriority: false,
    assigneeName: "Vahram",
    assigneeSurname: "Karapetyan",
    created: new Date("2022-04-28").getTime(),
    issueType: "bug",
    stage: "Done",
  },
];
