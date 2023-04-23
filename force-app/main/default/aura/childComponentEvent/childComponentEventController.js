({
  clickHandler: function (component, event, helper) {
    //alert("Send Message clicked on child component");
    let messageAura = component.getEvent("messageaura");
    messageAura.setParams({
      message: "Welcome to learn Component Events"
    });
    messageAura.fire();
  }
});
