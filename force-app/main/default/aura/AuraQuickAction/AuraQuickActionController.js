({
  loadEventHandler: function (component, event, helper) {
    console.log("On Load Event Fired");
    component.find("accountname").set("v.value", component.get("v.recordId"));
    component.find("email").set("v.value", "ojastraining@test.com");
  },

  resetHandler: function (component, event, helper) {
    let fieldArray = component.find("field");
    fieldArray.forEach(function (currItem) {
      currItem.reset();
    });

    let emailId = component.find("email");
    emailId.reset();
  },

  successHandler: function (component, event, helper) {
    //close the quick action
    $A.get("e.force:closeQuickAction").fire();

    //show the toast event
    var resultsToast = $A.get("e.force:showToast");
    resultsToast.setParams({
      title: "Contact Saved",
      message: "The new contact was created.",
      type: "success"
    });
    resultsToast.fire();

    //refresh the account view
    $A.get("e.force:refreshView").fire();
  },

  errorHandler: function (component, event, helper) {
    console.log(JSON.stringify(event.getParams()));
    let errorMessage = event.getParam("detail");

    //show the toast event
    var resultsToast = $A.get("e.force:showToast");
    resultsToast.setParams({
      title: "Error",
      message: errorMessage,
      type: "error"
    });
    resultsToast.fire();
  },

  submitHandler: function (component, event, helper) {
    //step 1
    event.preventDefault();

    //step 2
    let field = event.getParam("fields");
    if (!field.Title) {
      field.Title = "Sales Person";
    }

    //step 3
    component.find("recordEditForm").submit(field);
  }
});
