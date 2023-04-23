({
  initHandlerhelper: function (component, event, helper) {
    //define the method
    let action = component.get("c.getAccountWithContacts");

    //set the param
    action.setParams({
      accountId: component.get("v.recordId")
    });

    //handle the callback
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        console.log("AuraWrapper Output", response.getReturnValue());
        component.set("v.acccountcontactwrapper", response.getReturnValue());
      } else if (state === "ERROR") {
        console.log("AuraWrapper Error", response.getError());
      }
    });

    //request to server
    $A.enqueueAction(action);
  },
  defineColumns: function (component) {
    component.set("v.columns", [
      { label: "First Name", fieldName: "FirstName", type: "text" },
      { label: "Last Name", fieldName: "LastName", type: "text" },
      { label: "Email", fieldName: "Email", type: "email" }
    ]);
  }
});
