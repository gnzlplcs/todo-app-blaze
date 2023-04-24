import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from "../imports/api/TasksCollection";

const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  // code to run on server at startup

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

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
