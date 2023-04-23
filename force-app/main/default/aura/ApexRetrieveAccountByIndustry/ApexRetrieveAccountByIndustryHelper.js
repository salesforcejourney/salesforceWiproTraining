({
  loadAccountsHelper: function (component, event, helper) {
    //a) define the method name of the apex
    let action = component.get("c.getAccountByIndustry");
    //let industry = component.get("v.industry");
    //b)set the param
    action.setParams({
      industry: "Energy"
    });
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
  }
});
