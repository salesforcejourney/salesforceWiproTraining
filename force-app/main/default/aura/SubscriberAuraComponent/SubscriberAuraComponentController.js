({
  applicationEventHandler: function (component, event, helper) {
    console.log("Event Handled");
    let param = event.getParam("message");
    component.set("v.publisherMessage", param);
  }
});
