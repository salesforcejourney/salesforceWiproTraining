({
  sendMessageHandler: function (component, event, helper) {
    let message = event.getParam("msg");
    component.set("v.message", message);
  }
});
