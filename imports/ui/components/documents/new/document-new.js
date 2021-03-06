import { Template } from "meteor/templating"

import CreateDocumentSchema from "/imports/api/documents/both/schemas/create-document-schema.js"
import addProblem from "/imports/api/documents/both/problemMethods.js"

import "./document-new.html"
import "./document-new-hooks.js"

Template.documentNew.onCreated(function() {})

Template.documentNew.onRendered(function() {})

Template.documentNew.onDestroyed(function() {})

Template.documentNew.helpers({

})

Template.documentNew.events({
  'submit'(event){
    event.preventDefault();
    console.log(event.target.problemDescription.value);
    addProblem.call({
      summary: event.target.problemSummary.value,
      description: event.target.problemDescription.value
    }, (err, res) => {
      if (err) {
        console.log(err.error);
      }
      console.log(res);
    }
  );
    event.preventDefault();
  }
})
