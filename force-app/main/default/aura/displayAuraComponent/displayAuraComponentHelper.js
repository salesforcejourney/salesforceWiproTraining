({
  initHandlerHelper: function (component, event) {
    let action = component.get("c.getAccountByIndustry");
    action.setParams({
      industry: component.get("v.accountIndustry")
    });
    action.setCallback(this, function (response) {
      let state = response.getState();
      console.log("state ", state);
      console.log(
        " Accounts response.getReturnValue() ",
        response.getReturnValue()
      );
      component.set("v.accounts", response.getReturnValue());
    });
    $A.enqueueAction(action);
  },
  handleSendAccountNameHelper: function (component, event) {
    let accountName = event.getParam("accname");
    component.set("v.accountName", accountName);
  },
  handleSearchIndustryEventHelper: function (component, event) {
    let param = event.getParam("industry");
    component.set("v.accountIndustry", param);
    this.initHandlerHelper(component, event);
  }
});
