var database = {
  projects: [
    {
      id: 1,
      projectName: "Write a book",
      projectDescription:
        "Hehe Lizards are a widespread group of squamate reptiles, with over 6,000 species,ranging across all continents except Antarctica",
      tasksNumber: 15,
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
      projectCreator: "joe",
      totalTimeInMinutes: 90,
      tasks: [
        {
          taskNumber: 1,
          taskName: "Draw a horse",
          totalTimeInMinutes: 12,
          taskDescription:
            "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
          taskMeta: {
            assignedBy: "Sammy O'neil",
            assignee: "Joe Doe",
          },
          subTasks: [
            {
              subTaskNumber: 1,
              subTaskName: "Find a paper",
              subTotalTimeInMinutes: 2,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Sammy O'neil",
                assignee: "Joe Doe",
              },
            },
            {
              subTaskNumber: 2,
              subTaskName: "Find a pen",
              subTotalTimeInMinutes: 3,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Sammy O'neil",
                assignee: "Joe Doe",
              },
            },
            {
              subTaskNumber: 3,
              subTaskName: "draw a 1st draft",
              subTotalTimeInMinutes: 5,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Sammy O'neil",
                assignee: "Joe Doe",
              },
            },
          ],
        },
        {
          taskNumber: 2,
          taskName: "Color the horse",
          totalTimeInMinutes: 9,
          taskDescription:
            "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
          taskMeta: {
            assignedBy: "Sammy O'neil",
            assignee: "Joe Doe",
          },
          subTasks: [],
        },
      ],
    },
    {
      id: 2,
      projectName: "Code an app",
      projectDescription:
        "Hehe Lizards are a widespread group of squamate reptiles, with over 6,000 species,ranging across all continents except Antarctica",
      tasksNumber: 4,
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
      projectCreator: "Samir",
      totalTimeInMinutes: 90,
      tasks: [
        {
          taskNumber: 1,
          taskName: "Design a mockup",
          totalTimeInMinutes: 20,
          taskDescription:
            "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
          taskMeta: {
            assignedBy: "Sammy O'neil",
            assignee: "Joe Doe",
          },
          subTasks: [
            {
              subTaskNumber: 1,
              subTaskName: "User research",
              subTotalTimeInMinutes: 120,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Jonny Sai",
                assignee: "Mike Doe",
              },
            },
            {
              subTaskNumber: 2,
              subTaskName: "Photoshop wireframe",
              subTotalTimeInMinutes: 230,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Jonny Sai",
                assignee: "Mike Doe",
              },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      projectName: "Finish Assignment",
      projectDescription:
        "Hehe  Lizards are a widespread group of squamate reptiles, with over 6,000 species,ranging across all continents except Antarctica",
      tasksNumber: 12,
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
      projectCreator: "Potter",
      totalTimeInMinutes: 90,
      tasks: [
        {
          taskNumber: 1,
          taskName: "Watch lecture and complete tutorial sheet",
          totalTimeInMinutes: 19,
          taskDescription:
            "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
          taskMeta: {
            assignedBy: "Sammy O'neil",
            assignee: "Joe Doe",
          },
          subTasks: [
            {
              subTaskNumber: 1,
              subTaskName: "Watch lecture review",
              subTotalTimeInMinutes: 2,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Sammy O'neil",
                assignee: "Joe Doe",
              },
            },
            {
              subTaskNumber: 2,
              subTaskName: "Attempt questions for tutorial",
              subTotalTimeInMinutes: 25,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Sammy O'neil",
                assignee: "Joe Doe",
              },
            },
            {
              subTaskNumber: 3,
              subTaskName: "Create exam notes",
              subTotalTimeInMinutes: 40,
              subTaskDescription:
                "task description...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
              subTaskMeta: {
                assignedBy: "Sammy O'neil",
                assignee: "Joe Doe",
              },
            },
          ],
        },
      ],
    },
  ],
};

module.exports = database;
