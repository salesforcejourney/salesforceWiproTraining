({
  messageAuraHandler: function (component, event, helper) {
    let message = event.getParam("message");
    component.set("v.messagefromchild", message);
  }
});
