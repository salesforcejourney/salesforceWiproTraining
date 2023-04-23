({
  createClickHandler: function (component, event, helper) {
    //define the event
    let createAccount = $A.get("e.force:createRecord");
    //set the param
    createAccount.setParams({
      entityApiName: "Account",
      defaultFieldValues: {
        Phone: "415-240-6590",
        BillingCity: "Pune"
      }
    });
    //fire an event
    createAccount.fire();
  },

  editClickHandler: function (component, event, helper) {
    //define the event
    let editAccount = $A.get("e.force:editRecord");
    //set the param
    editAccount.setParams({
      recordId: component.get("v.recordId")
    });
    //fire an event
    editAccount.fire();
  }
});
