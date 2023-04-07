import { Template } from "meteor/templating";
import { TasksCollection } from "../api/TasksCollection";
import { ReactiveDict } from "meteor/reactive-dict";
import "./App.html";
import "./Task";

const HIDE_COMPLETED_STRING = "hideCompleted";

Template.mainContainer.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();
});

Template.mainContainer.helpers({
  tasks() {
    const instance = Template.instance();
    const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    const hideCompletedFilter = { isChecked: { $ne: true } };
    return TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
      sort: { createdAt: -1 },
    }).fetch();
  },
});

Template.mainContainer.events({
  "click #hide-completed-button"(event, instance) {
    const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
  },
});

Template.form.events({
  "submit .task-form"(event) {
    // prevent default browser form submit
    event.preventDefault();

    // get value from form element
    const target = event.target;
    const text = target.text.value;

    // insert a task into the collection
    TasksCollection.insert({
      text,
      createdAt: new Date(), // current time
    });

    // clear form
    target.text.value = "";
  },
});
