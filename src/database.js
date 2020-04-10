var database = {
  projects: [
    {
      id: 1,
      projectName: "Write a book",
      tasksNumber: 15,
      startDuration: new Date().toDateString(),
      endDate: new Date().toDateString(),
      projectCreator: "Shahyan",
    },
    {
      id: 2,
      projectName: "Code an app",
      tasksNumber: 4,
      startDuration: new Date().toDateString(),
      endDate: new Date().toDateString(),
      projectCreator: "Samir",
    },
    {
      id: 3,
      projectName: "Finish Assignment",
      tasksNumber: 12,
      startDuration: new Date().toDateString(),
      endDate: new Date().toDateString(),
      projectCreator: "Harry Potter",
    },
  ],
};

module.exports = database;
