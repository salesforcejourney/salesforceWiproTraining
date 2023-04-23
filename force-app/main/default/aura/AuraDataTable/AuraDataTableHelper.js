({
  initHandlerhelper: function (component, event, helper) {
    //a) define the method name of the apex
    let action = component.get("c.getTopAccounts");
    //b)set the param
    action.setParams({});
    //c) handle the response
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        console.log("Record Retrieved Successfully");
        console.log("Output", response.getReturnValue());
        component.set("v.Accounts", response.getReturnValue());
      } else if (state === "ERROR") {
        console.log("Error while retrieving account records");
        console.log("Error", response.getError());
      }
    });
    //d) make the server call
    $A.enqueueAction(action);
  },
  defineColumn: function (component) {
    component.set("v.columns", [
      { label: "Account name", fieldName: "Name", type: "text" },
      { label: "Account Industry", fieldName: "Industry", type: "text" },
      { label: "Account Rating", fieldName: "Rating", type: "text" },
      {
        label: "Account Revenue",
        fieldName: "AnnualRevenue",
        type: "currency",
        typeAttributes: { currencyCode: "USD", maximumSignificantDigits: 5 }
      }
    ]);
  }
});
