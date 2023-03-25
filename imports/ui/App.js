import { Template } from "meteor/templating";

import "./App.html";

Template.mainContainer.helpers({
  tasks: [
    { text: "Task 1" },
    { text: "Task 2" },
    { text: "Task 3" },
    { text: "Task 4" },
    { text: "Task 5" },
  ],
});
