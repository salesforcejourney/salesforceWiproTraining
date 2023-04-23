({
  AuraMessageChannelSubscriber: function (component, event, helper) {
    let param = event.getParams();
    console.log("Param from Publisher ", JSON.stringify(param));
    component.set("v.message", event.getParam("lmsData"));
  }
});
