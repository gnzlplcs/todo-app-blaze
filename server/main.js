import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../imports/api/TasksCollection";

const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  // code to run on server at startup
  if (TasksCollection.find().count() === 0) {
    [
      "first task",
      "second task",
      "third task",
      "fourth task",
      "fifth task",
      "sixth task",
      "seventh task",
    ].forEach(insertTask);
  }
});
